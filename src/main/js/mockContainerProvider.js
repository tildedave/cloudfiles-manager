goog.require('goog.dom');
goog.require('goog.net.XhrIo');

goog.provide('model.mock.ContainerProvider');

model.mock.ContainerProvider = function() {
    this.mockData = [
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
};

model.mock.ContainerProvider.prototype.loadData = function(containerTable) {
    containerTable.renderTable(this.mockData);
};








