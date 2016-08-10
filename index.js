"use strict";
require('dotenv').config();

var TasksCollection = require(__dirname + '/tasks/tasks_collection');
var ShopTasks = require(__dirname + '/tasks/shop_tasks');
var ScreenshotCapture = require(__dirname + '/screenshot_capture');
var collection = new TasksCollection();

collection.add(new ShopTasks());

new ScreenshotCapture(collection).process();