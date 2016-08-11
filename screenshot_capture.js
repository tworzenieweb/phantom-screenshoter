"use strict";

var Promise = require('promise');
var path = require('path');

/**
 *
 * @constructor
 * @param {TasksCollection} tasks
 * @param {Page} page
 */
function ScreenshotCapture(tasks, page) {
    this.tasks = tasks;
    this.page = page;
    this.isProcessed = false;
    this.stepProcessed = false;
    this.format = process.env.FORMAT;
    this.folder = process.env.SCREENSHOT_FOLDER;
    this.screenWidth = process.env.SCREEN_WIDTH;
    this.screenHeight = process.env.SCREEN_HEIGHT;
}

ScreenshotCapture.prototype.initEvents = function () {
    console.log('Events initialized');
    this.page.property('viewportSize', { width: this.screenWidth, height: this.screenHeight });
    this.page.on('onLoadStarted', () => {
        this.isProcessed = true;
        console.log("load started");
    });

    this.page.on('onLoadFinished', () => {
        this.isProcessed = false;
        console.log("load finished");
    });
};

/**
 *
 * @returns {Promise}
 */
ScreenshotCapture.prototype.process = function () {
    console.log('Screenshot capture started');
    this.initEvents();

    return new Promise((resolve) => {
        console.log('Opening', process.env.BASE_URL);

        this.page.open(process.env.BASE_URL).then((status) => {
            console.log("Page status: " + status);
            console.time('all screenshots');

            var interval = setInterval(() => {
                if (!this.isProcessed && !this.stepProcessed) {
                    var step = this.tasks.next();
                    this.stepProcessed = true;
                    if (!step) {
                        console.log('Finished all steps');
                        clearInterval(interval);
                        console.timeEnd('all screenshots');
                        resolve();
                    } else {
                        console.log(`Step ${this.tasks.step} started`);
                        evaluate(this.page, step, process.env).then((filename) => {
                            if (filename) {
                                var pathAndFilename = path.join(__dirname, this.folder, `${filename}.${this.format}`);
                                this.page.render(pathAndFilename);
                                console.log('Saving into ' + pathAndFilename);
                            }
                            console.log(`Step ${this.tasks.step} finished and saved`);
                            this.stepProcessed = false;

                            if (!step) {
                                resolve();
                            }
                        });
                    }
                }
            }, 1000);
        });
    });
};

/*
 * This function wraps WebPage.evaluate, and offers the possibility to pass
 * parameters into the webpage function. The PhantomJS issue is here:
 *
 *   http://code.google.com/p/phantomjs/issues/detail?id=132
 *
 * This is from comment #43.
 */
function evaluate(page, func) {
    var args = [].slice.call(arguments, 2);
    var fn = "function() { return (" + func.toString() + ").apply(this, " + JSON.stringify(args) + ");}";
    return page.evaluateJavaScript(fn);
}

module.exports = ScreenshotCapture;