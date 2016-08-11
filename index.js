"use strict";
require('dotenv').config();

var path = require('path');
var phantom = require('phantom');
var TasksCollection = require(path.join(__dirname, 'tasks/tasks_collection'));
var ShopTasks = require(path.join(__dirname, 'tasks/shop_tasks'));
var ScreenshotCapture = require(path.join(__dirname, 'screenshot_capture'));

var collection = new TasksCollection();
collection.add(new ShopTasks());

phantom.create()
    .then(instance => {
        instance.createPage().then(function (page) {
            new ScreenshotCapture(collection, page)
                .process()
                .then(() => instance.exit());
        });
    });