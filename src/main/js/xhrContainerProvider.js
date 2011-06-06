goog.require('goog.net.XhrIo');

goog.provide('model.xhr.ContainerProvider');

model.xhr.ContainerProvider = function() {
    
};

model.xhr.ContainerProvider.prototype.loadData = function(containerTable) {
    var renderResponse = function (e) {
        containerTable.renderTable(e.target.getResponseJson());
    };
    goog.net.XhrIo.send('/containers', renderResponse);
};
