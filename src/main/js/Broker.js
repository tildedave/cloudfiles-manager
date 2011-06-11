goog.provide('ui.Broker');

goog.require('goog.dom');
goog.require('ui.Events');

goog.require('model.cache.ContainerProvider');
goog.require('model.cache.ObjectProvider');

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
                                parentObj.selectAllContainers(parentObj);
                              });
  
  parentObj.addEventListener(ui.Events.SELECT_CONTAINER,
                              function (e) {
                                parentObj.clearBroker();
                                parentObj.selectContainer(parentObj, e.target.name);
                              });
};

ui.Broker.prototype.clearBroker = function () {
  goog.dom.removeChildren(goog.dom.getElement("entity-view"));    
};

ui.Broker.prototype.selectAllContainers = function () {
  var testData = [
    { name: "Lucky",
      count: 154,
      bytes: 1000
    },
    { name: "Siggy",
      count: 20,
      bytes: 500 
    },
    { name: "Simon",
      count: 0,
      bytes: 123
    }
  ];

  var mockProvider = new model.cache.ContainerProvider();
  var table = new ui.cloud_files.ContainerTable(this, mockProvider);
  mockProvider.setData(testData);
  table.load();
};

ui.Broker.prototype.selectContainer = function (name) {
  var testData = [
    { name: "Puppy",
      hash: "35987158127295187",
      bytes: 1000,
      content_type: "text/xml",
      last_modified: "Today"
    } ];

  var mockProvider = new model.cache.ObjectProvider(testData);
  var table = new ui.cloud_files.ObjectTable(this, mockProvider);
  table.load();
};


