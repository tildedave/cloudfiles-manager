goog.provide('ui.Broker');

goog.require('goog.dom');
goog.require('ui.Events');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ui.Broker = function () {
  goog.events.EventTarget.call(this);
  this.bindEvents();
};
goog.inherits(ui.Broker, goog.events.EventTarget);

ui.Broker.prototype.bindEvents = function () {
  var parentObj = this;
  parentObj.addEventListener(ui.Events.SELECT_ALL_CONTAINERS,
                              function (e) {
                                parentObj.clearBroker();
                                parentObj.selectAllContainers();
                              });
  
  parentObj.addEventListener(ui.Events.SELECT_CONTAINER,
                              function (e) {
                                parentObj.clearBroker();
                                parentObj.selectContainer(e.target.name);
                              });
};

ui.Broker.prototype.clearBroker = function () {
  goog.dom.removeChildren(goog.dom.getElement("entity-view"));    
};

ui.Broker.prototype.selectAllContainers = function () {
  var provider = ui.Providers.getContainerProvider();
  var table = new ui.cloud_files.ContainerTable(this, provider);
  table.load();
};

ui.Broker.prototype.selectContainer = function (name) {
  var provider = ui.Providers.getObjectProvider(name);
  var table = new ui.cloud_files.ObjectTable(this, provider, name);
  table.load();
};


