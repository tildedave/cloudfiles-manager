goog.provide('rackspace.ui.cloud_files.container');

goog.require('goog.dom');
goog.require('goog.ui.Component');

// container represents a container that has
// been returned by the API

// should eventually support:
// * mouseover for metadata...
// * click to show/hide objects

rackspace.ui.cloud_files.container = function(opt_domHelper, name, count, bytes) {
    goog.ui.Component.call(this, opt_domHelper);
    
    this.name = name;
    this.count = count;
    this.bytes = bytes;
};

goog.inherits(rackspace.ui.cloud_files.container, goog.ui.Component);

// TODO: structure these better, i.e. put them into a table
rackspace.ui.cloud_files.container.prototype.createDom = function() {
    var parent = this.parent_;
    var templ = goog.dom.htmlToDocumentFragment("<div class=\"container\">" + this.name + "</div>");
    
    this.decorateInternal(templ);
};