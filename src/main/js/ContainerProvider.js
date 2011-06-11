goog.require('goog.dom');
goog.require('goog.net.XhrIo');

goog.provide('model.cache.ContainerProvider');
goog.provide('model.xhr.ContainerProvider');

/**
 * @constructor
 */
model.cache.ContainerProvider = function(table) {
  this.table = table;
};

model.cache.ContainerProvider.prototype.get = function() {
    this.table.renderTable(this.data);
};

model.cache.ContainerProvider.prototype.setData = function(data) {
  this.data = data;
};

/**
 * @constructor
 */
model.xhr.ContainerProvider = function(table) {
    this.table = table;
};

model.xhr.ContainerProvider.prototype.get = function() {
  var table = this.table;
  goog.net.XhrIo.send('/containers', function (e) {
    table.renderTable(e.target.getResponseJson());
  });
};
