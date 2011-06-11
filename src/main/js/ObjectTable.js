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
  var cancelButtons = goog.dom.getElementsByClass("delete");
  var parentObj = this;
  
  for(var i = 0, l = objectDoms.length; i < l; ++i) {
    (function () {
      new ui.cloud_files.Object(broker, container, objectDoms[i]);
      // bind cancel button to deleting this object

      // TODO: put this in the Object class after hackathon is done
      var cancelButton = cancelButtons[i];
      var object = goog.dom.getTextContent(objectDoms[i]);

      var dialog = new ui.cloud_files.ConfirmFileDeleteDialog(
        parentObj,
        container,
        object);
      goog.events.listen(cancelButton, goog.events.EventType.CLICK, function(e) {
        dialog.setVisible(true);
      });
    })();
  }
};

ui.cloud_files.ObjectTable.prototype.deleteFile = function (name) {
  var fileProvider = ui.Providers.getFileProvider(this.container, name);
  fileProvider.delete_(this);
};

ui.cloud_files.ObjectTable.prototype.deleteResponse = function () {
  var event = new goog.events.Event(
    ui.Events.SELECT_CONTAINER,
    { name: this.container });

  goog.events.dispatchEvent(this.broker, event);
};

