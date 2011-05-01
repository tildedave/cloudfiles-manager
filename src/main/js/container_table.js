goog.provide('rackspace.ui.cloud_files.container_table');

goog.require('goog.dom');
goog.require('goog.ui.Component');

rackspace.ui.cloud_files.container_table = function(opt_lable, opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);

  this.data = [];
}
goog.inherits(rackspace.ui.cloud_files.container_table, goog.ui.Component);

rackspace.ui.cloud_files.container_table.prototype.createDom = function(){
  var table = goog.dom.htmlToDocumentFragment(
    rackspace.ui.cloud_files.container_table_tmpl({containers: this.data}));
  this.decorateInternal(table);
}

rackspace.ui.cloud_files.container_table.prototype.decorateInternal = function(table){
  rackspace.ui.cloud_files.container_table.superClass_.decorateInternal.call(this, table);
}

rackspace.ui.cloud_files.container_table.prototype.setData = function(data){

  this.data = data;

  var table = this.getElement();

  //Remove unneeded rows
  for(var i = table.rows.length; i > data.length + 1; i--){
    table.deleteRow(i);
  }
  
  //Add some more rows (+1 to skip header row)
  for(var i = 0; i < this.data.length; i++){
    table.insertRow(i + 1);
  }

  try{
  //Set data in the rows
  for(var i = 0; i < this.data.length; i++){
    var row = i + 1; //exclude header

    if(table.rows[row].cells.length != 3){
      table.rows[row].insertCell(0);
      table.rows[row].insertCell(1);
      table.rows[row].insertCell(2);
    }

    table.rows[row].cells[0].innerText = data[i].name;
    table.rows[row].cells[1].innerText = data[i].count;
    table.rows[row].cells[2].innerText = data[i].bytes;
  }
  }catch(e){alert(e);}
}

rackspace.ui.cloud_files.container_table.prototype.load = function(element){
  var x = this;
  goog.net.XhrIo.send('/containers', function(e) {
    var xhr = e.target;
    var obj = xhr.getResponseJson();

    x.setData(obj);
  });
}
