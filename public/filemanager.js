goog.require('goog.dom');
goog.require("goog.net.XhrIo");

goog.provide('rackspace.filemanager.FileFetcher');
goog.provide('rackspace.filemanager.FileDisplayer');

rackspace.filemanager.FileDisplayer = function() {
};

/**
 * @constructor
 */
rackspace.filemanager.FileFetcher = function() {
    this.request = new goog.net.XhrIo();
};

/** 
 * @nosideffects
 * type {function():goog.net.XhrIo} 
 */
rackspace.filemanager.FileFetcher.prototype.getRequest = function() {
    return this.request;
};

rackspace.filemanager.FileFetcher.prototype.getFiles = function() {
    this.request.send('/containers');
};