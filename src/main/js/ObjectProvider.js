goog.provide('model.cache.ObjectProvider');
goog.provide('model.xhr.ObjectProvider');

/**
 * @constructor
 */
model.cache.ObjectProvider = function(data) {
  this.data = data;
};

model.cache.ObjectProvider.prototype.get = function(table) {
  table.getResponse(this.data);
};

