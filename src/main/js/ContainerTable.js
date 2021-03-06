goog.require('goog.dom');
goog.require('ui.cloud_files.Container');

goog.provide('ui.cloud_files.ContainerTable');

/**
 * @constructor
 */
ui.cloud_files.ContainerTable = function (broker, provider) {
  this.broker = broker;
  this.provider = provider;
  this.containers = [];
};

ui.cloud_files.ContainerTable.prototype.load = function () {
    this.provider.get(this);
};

ui.cloud_files.ContainerTable.prototype.getResponse = function (data) {
    this.render(data);
};

ui.cloud_files.ContainerTable.prototype.render = function (data) {
    var htmlTable = /** @type (string) */
        ui.cloud_files.ContainerTableTmpl({containers: data});
    var domTable = /** @type (Node) */ 
        goog.dom.htmlToDocumentFragment(htmlTable);

    goog.dom.appendChild(
        goog.dom.getElement("entity-view"),
        domTable);

  var parentObj = this;
  var addContainerButton = goog.dom.getElement("addContainerButton");
  goog.events.listen(addContainerButton, goog.events.EventType.CLICK, function(e) {
    var dialog = new ui.cloud_files.CreateContainerDialog(parentObj);
    dialog.setVisible(true);
  });
  

  var containersDom = goog.dom.getElementsByClass('container');
  this.createContainers(containersDom);
};

ui.cloud_files.ContainerTable.prototype.createContainers = function (containersDom) {
  for(var i = 0, l = containersDom.length; i < l; ++i) {
    var container = new ui.cloud_files.Container(this.broker, containersDom[i]);
    this.containers.push(container);
  }
};

ui.cloud_files.ContainerTable.prototype.createContainer = function (name) {
  this.provider.post(name, this);
};

ui.cloud_files.ContainerTable.prototype.postResponse = function () {
  this.broker.dispatchEvent(ui.Events.SELECT_ALL_CONTAINERS);
};









