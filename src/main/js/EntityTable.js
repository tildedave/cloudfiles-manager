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
                          parentObj.select_all_containers();
                        });
};
goog.inherits(ui.cloud_files.EntityTable, goog.events.EventTarget);

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

  var table = new ui.cloud_files.ContainerTable();
  var mockProvider = new model.cache.ContainerProvider(table);
  table.setProvider(mockProvider);
  mockProvider.setData(testData);
  table.load();
};
