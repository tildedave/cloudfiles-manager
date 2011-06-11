goog.provide('model.cache.FileProvider');
goog.provide('model.xhr.FileProvider');

/**
 * @constructor
 */
model.cache.FileProvider = function(container, name) {
};

model.cache.FileProvider.prototype.get = function() {
  window.open("/byron.txt", "Download");
};

/**
 * @constructor
 */

model.xhr.FileProvider = function (container, name) {
  var url = '/containers/' + container + '/name';
  window.open(url, "Download");
};