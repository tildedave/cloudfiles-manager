goog.provide('ui.cloud_files.ObjectTable');

goog.require('goog.dom');
goog.require('ui.Events');
goog.require('goog.events.KeyHandler');
goog.require('ui.cloud_files.Object');

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
     ui.cloud_files.ObjectTableTmpl({container: this.container,
                                     objects: data});
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
  var backHandler = function (e) {
    broker.dispatchEvent(ui.Events.SELECT_ALL_CONTAINERS);
  };
  goog.events.listen(backButton, goog.events.EventType.CLICK, backHandler);

  var uploadButton = goog.dom.getElement("uploadObject");
  goog.events.listen(uploadButton, goog.events.EventType.CLICK, function (e) {
    alert("Time to upload a file to " + container + "!");
  });

  var objectDoms = goog.dom.getElementsByClass("object");
  for(var i = 0, l = objectDoms.length; i < l; ++i) {
    new ui.cloud_files.Object(broker, container, objectDoms[i]);
  }
};