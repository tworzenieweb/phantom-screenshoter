"use strict";

var phantom = require('phantom');

function ScreenshotCapture(tasks) {
    this.tasks = tasks;
    this.sitepage = null;
    this.phInstance = null;
    this.isProcessed = false;
    this.stepProcessed = false;
    this.format = process.env.FORMAT;
}

ScreenshotCapture.prototype.process = function() {
    phantom.create()
        .then(instance => {
            this.phInstance = instance;
            return instance.createPage();
        })
        .then(page => {
            this.sitepage = page;

            this.sitepage.property('viewportSize', {width: 1280, height: 768});
            this.sitepage.on('onLoadStarted', () => {
                this.isProcessed = true;
                console.log("load started");
            });

            this.sitepage.on('onLoadFinished', () => {
                this.isProcessed = false;
                console.log("load finished");
            });

            return this.sitepage.open(process.env.BASE_URL);
        }).then((status) => {

        console.time('all screenshots');

        var interval = setInterval(() => {
            if (!this.isProcessed && !this.stepProcessed) {

                var step = this.tasks.next();
                if (!step) {
                    console.log('Finished all steps');
                    clearInterval(interval);
                    console.timeEnd('all screenshots');

                    this.phInstance.exit();
                } else {
                    console.log(`Step ${this.tasks.step} started`);

                    evaluate(this.sitepage, step, process.env).then((path) => {
                        this.sitepage.render(__dirname + "/screens/" + path + '.' + this.format);
                        console.log(`Step ${this.tasks.step} finished and saved`);
                        this.stepProcessed = false;

                        if (!step) {
                            this.phInstance.exit();
                        }
                    });
                }
            }
        }, 100);
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