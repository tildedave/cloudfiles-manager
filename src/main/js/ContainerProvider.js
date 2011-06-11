goog.require('goog.dom');
goog.require('goog.net.XhrIo');

goog.provide('model.cache.ContainerProvider');
goog.provide('model.xhr.ContainerProvider');

/**
 * @constructor
 */
model.cache.ContainerProvider = function(data) {
  this.data = data;
};

model.cache.ContainerProvider.prototype.get = function(table) {
    table.getResponse(this.data);
};

model.cache.ContainerProvider.prototype.post = function(data, table) {
  table.postResponse();
};

model.cache.ContainerProvider.prototype.setData = function(data) {
  this.data = data;
};

/**
 * @constructor
 */
model.xhr.ContainerProvider = function() {
};

model.xhr.ContainerProvider.prototype.get = function(table) {
  goog.net.XhrIo.send('/containers', function (e) {
    table.getResponse(e.target.getResponseJson());
  });
};

model.xhr.ContainerProvider.prototype.post = function(container, table) {
  goog.net.XhrIo.send('/containers/' + container,
                      function (e) {
                        table.postResponse();
                      },
                      "POST");


};
