goog.provide('ui.cloud_files.ObjectTable');

goog.require('goog.dom');
goog.require('ui.Events');

/**
 * @constructor
 */
ui.cloud_files.ObjectTable = function (broker, provider, container) {
  this.broker = broker;
  this.provider = provider;
  this.container = container;
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

  this.bindEvents();
};

ui.cloud_files.ObjectTable.prototype.bindEvents = function () {
  var broker = this.broker;
  var container = this.container;
  
  var backButton = goog.dom.getElement("backObject");
  goog.events.listen(backButton, goog.events.EventType.CLICK, function (e) {
    broker.dispatchEvent(ui.Events.SELECT_ALL_CONTAINERS);
  });

  var uploadButton = goog.dom.getElement("uploadObject");
  goog.events.listen(uploadButton, goog.events.EventType.CLICK, function (e) {
    alert("Time to upload a file to " + container + "!");
  });
};