goog.require("ui.cloud_files.ContainerTable");
goog.require("model.cache.ContainerProvider");

goog.provide('ui.cloud_files.Bootstrap');

ui.cloud_files.Bootstrap.go = function () {
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