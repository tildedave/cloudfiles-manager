goog.require('goog.dom');
goog.require('model.mock.ContainerProvider');

goog.provide('ui.cloud_files.ContainerTable');

ui.cloud_files.ContainerTable = function (dataProvider) {
    this.dataProvider = dataProvider;
};

ui.cloud_files.ContainerTable.prototype.load = function () {
    this.dataProvider.loadData(this);
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







