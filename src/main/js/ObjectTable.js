goog.provide('ui.cloud_files.ObjectTable');

goog.require('goog.dom');
goog.require('goog.ui.Dialog');
goog.require('goog.events.KeyHandler');

goog.require('ui.Events');
goog.require('ui.cloud_files.Object');
goog.require('ui.cloud_files.UploadFileDialog');

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
    var dialog = new ui.cloud_files.UploadFileDialog(container);
    dialog.setVisible(true);
  });

  var objectDoms = goog.dom.getElementsByClass("object");
  for(var i = 0, l = objectDoms.length; i < l; ++i) {
    new ui.cloud_files.Object(broker, container, objectDoms[i]);
  }
};