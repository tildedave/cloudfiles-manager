goog.provide('model.cache.FileProvider');
goog.provide('model.xhr.FileProvider');

/**
 * @constructor
 */
model.cache.FileProvider = function(container, name) {
  this.container = container;
  this.name = name;
};

model.cache.FileProvider.prototype.get = function() {
  window.open("/byron.txt", "Download");
};

model.cache.FileProvider.prototype.delete_ = function (objectTable) {
  window.console.log("zomg delete file");
  objectTable.deleteResponse();
};
/**
 * @constructor
 */

model.xhr.FileProvider = function (container, name) {
  this.container = container;
  this.name = name;
};

model.xhr.FileProvider.prototype.get = function() {
  var url = '/containers/' + this.container + '/' + this.name;
  window.open(url, "Download");    
};

model.xhr.FileProvider.prototype.delete_ = function (objectTable) {
  window.console.log("zomg delete file " + this.container + " and " + this.name);
  goog.net.XhrIo.send('/containers/' + this.container + '/' + this.name,
                      function (e) {
                        objectTable.deleteResponse();
                      },
                      "DELETE");
};