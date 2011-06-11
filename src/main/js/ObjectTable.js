goog.provide('ui.cloud_files.ObjectTable');

goog.require('goog.dom');
goog.require('ui.Events');

/**
 * @constructor
 */
ui.cloud_files.ObjectTable = function (broker, provider) {
  this.broker = broker;
  this.provider = provider;
};

ui.cloud_files.ObjectTable.prototype.load = function () {
  this.provider.get(this);
};

ui.cloud_files.ObjectTable.prototype.getResponse = function (data) {
  var htmlTable = /** @type (string) */
     ui.cloud_files.ObjectTableTmpl({objects: data});
  var domTable = /** @type (Node) */ 
     goog.dom.htmlToDocumentFragment(htmlTable);

  goog.dom.appendChild(
    goog.dom.getElement("entity-view"),
    domTable);
};







