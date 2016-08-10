"use strict";

function TasksCollection() {
    this.suites = [];
    this.index = 0;
    this.step = 0;
};

TasksCollection.prototype.add = function (suite) {
    this.suites.push(suite);
};

TasksCollection.prototype.next = function () {

    if (!this.suites[this.index]) {
        return false;
    }

    var current = this.suites[this.index].steps;

    if (current && current.length) {
        this.step++;
        return current.shift();
    }

    this.index++;

    return this.next();
};

module.exports = TasksCollection;