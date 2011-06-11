goog.provide('model.cache.ObjectProvider');
goog.provide('model.xhr.ObjectProvider');

/**
 * @constructor
 */
model.cache.ObjectProvider = function(container, data) {
  this.container = container;
  this.data = data;
};

model.cache.ObjectProvider.prototype.get = function(table) {
  table.getResponse(this.data);
};

/**
 * @constructor
 */
model.xhr.ObjectProvider = function (container) {
    this.container = container;
};

model.xhr.ObjectProvider.prototype.get = function(table) {
  var url = '/containers/' + this.container;
  goog.net.XhrIo.send(url, function (e) {
    table.getResponse(e.target.getResponseJson());
  });
};
