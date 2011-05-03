goog.provide('rackspace.ui.cloud_files.container_table');

goog.require('goog.dom');
goog.require('goog.ui.Component');

rackspace.ui.cloud_files.container_table = function(opt_lable, opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
  this.containers = [];
};

goog.inherits(rackspace.ui.cloud_files.container_table, goog.ui.Component);

rackspace.ui.cloud_files.container_table.prototype.createDom = function(){
    console.log(this.containers);
    var table = goog.dom.htmlToDocumentFragment(
        rackspace.ui.cloud_files.container_table_tmpl());
    this.decorateInternal(table);
};

rackspace.ui.cloud_files.container_table.prototype.decorateInternal = function(table){
  rackspace.ui.cloud_files.container_table.superClass_.decorateInternal.call(this, table);
};

rackspace.ui.cloud_files.container_table.prototype.setData = function(data){

    var dom = this.getDomHelper();

    for(var i = 0; i < data.length; i++) {
        var containerData = data[i];
        console.log(containerData);
        var container = new rackspace.ui.cloud_files.container(dom, containerData.name, 
                                                               containerData.count, containerData.bytes);
        this.addChild(container, true);
    }

    this.render();
};

rackspace.ui.cloud_files.container_table.prototype.load = function(element){
  var x = this;
  goog.net.XhrIo.send('/containers', function(e) {
    var xhr = e.target;
    var obj = xhr.getResponseJson();

    x.setData(obj);
  });
}
