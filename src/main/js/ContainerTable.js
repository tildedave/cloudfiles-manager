goog.require('goog.dom');
goog.require('model.cache.ContainerProvider');
goog.require('ui.cloud_files.Container');

goog.provide('ui.cloud_files.ContainerTable');

/**
 * @constructor
 */
ui.cloud_files.ContainerTable = function (broker, provider) {
  this.broker = broker;
  this.provider = provider;
  this.containers = [];
};

ui.cloud_files.ContainerTable.prototype.load = function () {
    this.provider.get(this);
};

ui.cloud_files.ContainerTable.prototype.getResponse = function (data) {
    this.renderTable(data);
};

ui.cloud_files.ContainerTable.prototype.renderTable = function (data) {
    var htmlTable = /** @type (string) */
        ui.cloud_files.ContainerTableTmpl({containers: data});
    var domTable = /** @type (Node) */ 
        goog.dom.htmlToDocumentFragment(htmlTable);

    goog.dom.appendChild(
        goog.dom.getElement("entity-view"),
        domTable);

  var containersDom = goog.dom.getElementsByClass('container');
  this.createContainers(containersDom);
};

ui.cloud_files.ContainerTable.prototype.createContainers = function (containersDom) {
  for(var i = 0, l = containersDom.length; i < l; ++i) {
    var container = new ui.cloud_files.Container(this.broker, containersDom[i]);
    this.containers.push(container);
  }
};