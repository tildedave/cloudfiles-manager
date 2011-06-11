goog.provide('ui.cloud_files.EntityTable');

goog.require('goog.dom');
goog.require('ui.Events');

/**
 * @constructor
 */
ui.cloud_files.EntityTable = function () {
  var parentObj = this;
  this.addEventListener(ui.Events.SELECT_ALL_CONTAINERS,
                        function (e) {
                          parentObj.clear_entity_table();
                          parentObj.select_all_containers();
                        });
  this.addEventListener(ui.Events.SELECT_CONTAINER,
                        function (e) {
                          parentObj.clear_entity_table();
                          parentObj.select_container(e.target.name);
                        });
};
goog.inherits(ui.cloud_files.EntityTable, goog.events.EventTarget);

ui.cloud_files.EntityTable.prototype.clear_entity_table = function () {
  goog.dom.removeChildren(goog.dom.getElement("entity-view"));    
};

ui.cloud_files.EntityTable.prototype.select_all_containers = function () {
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

ui.cloud_files.EntityTable.prototype.select_container = function (name) {
  console.log("let's select " + name);
};