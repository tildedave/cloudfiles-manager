goog.provide('ui.cloud_files.EntityTable');

goog.require('goog.dom');
goog.require('ui.Events');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ui.cloud_files.EntityTable = function () {
  goog.events.EventTarget.call(this);
  this.bindEvents();
};
goog.inherits(ui.cloud_files.EntityTable, goog.events.EventTarget);

ui.cloud_files.EntityTable.prototype.bindEvents = function () {
  var parentObj = this;
  parentObj.addEventListener(ui.Events.SELECT_ALL_CONTAINERS,
                              function (e) {
                                parentObj.clearEntityTable();
                                parentObj.selectAllContainers();
                              });
  
  parentObj.addEventListener(ui.Events.SELECT_CONTAINER,
                              function (e) {
                                parentObj.clearEntityTable();
                                parentObj.selectContainer(e.target.name);
                              });
};

ui.cloud_files.EntityTable.prototype.clearEntityTable = function () {
  goog.dom.removeChildren(goog.dom.getElement("entity-view"));    
};

ui.cloud_files.EntityTable.prototype.selectAllContainers = function () {
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

  var table = new ui.cloud_files.ContainerTable(this);
  var mockProvider = new model.cache.ContainerProvider(table);
  table.setProvider(mockProvider);
  mockProvider.setData(testData);
  table.load();
};

ui.cloud_files.EntityTable.prototype.selectContainer = function (name) {
};