goog.require('goog.dom');
goog.require('model.cache.ContainerProvider');
goog.require('ui.cloud_files.Container');

goog.provide('ui.cloud_files.ContainerTable');

/**
 * @constructor
 */
ui.cloud_files.ContainerTable = function () {
};

ui.cloud_files.ContainerTable.prototype.setProvider = function (provider) {
  this.provider = provider;
};

ui.cloud_files.ContainerTable.prototype.load = function () {
    this.provider.get(this);
};

ui.cloud_files.ContainerTable.prototype.renderTable = function (data) {
    var htmlTable = /** @type (string) */
        ui.cloud_files.ContainerTableTmpl({containers: data});
    var domTable = /** @type (Node) */ 
        goog.dom.htmlToDocumentFragment(htmlTable);
    goog.dom.appendChild(
        goog.dom.getElement("entity-view"),
        domTable);

  this.bindEvents();
};

ui.cloud_files.ContainerTable.prototype.bindEvents = function (data) {

  var containers = goog.dom.getElementsByClass('container');
  for(var i = 0, l = containers.length; i < l; ++i) {
    var container = new ui.cloud_files.Container(containers[i]);
  }
};