goog.provide('ui.cloud_files.ObjectTable');

goog.require('goog.dom');
goog.require('ui.Events');

/**
 * @constructor
 */
ui.cloud_files.ObjectTable = function () {
};

ui.cloud_files.ObjectTable.prototype.setProvider = function (provider) {
  this.provider = provider;
};

ui.cloud_files.ObjectTable.prototype.load = function () {
  this.provider.get(this);
};









