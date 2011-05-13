goog.require('goog.dom');
goog.require('goog.net.XhrIo');

goog.provide('ui.cloud_files.ContainerTable');

ui.cloud_files.ContainerTable = function () {
};

ui.cloud_files.ContainerTable.prototype.load = function () {
    var that = this;
    var renderResponse = function (e) {
        that.renderTable(e.target.getResponseJson());
    };
    goog.net.XhrIo.send('/containers', renderResponse);
};

ui.cloud_files.ContainerTable.prototype.renderTable = function (data) {
    var htmlTable = /** @type (string) */
        ui.cloud_files.ContainerTableTmpl({containers: data});
    var domTable = /** @type (Node) */ 
        goog.dom.htmlToDocumentFragment(htmlTable);
    goog.dom.appendChild(
        goog.dom.getElement("containers"),
        domTable);
};







