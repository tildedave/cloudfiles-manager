goog.provide('ui.cloud_files.UploadFileDialog');

goog.require('goog.ui.Dialog');

/**
 * @constructor
 * @extends {goog.ui.Dialog}
 */
ui.cloud_files.UploadFileDialog = function (container) {
  goog.ui.Dialog.call(this);  
  this.container = container;

  this.setContent("<h2>Upload a File</h2><ul><li>Not implemented yet</li><li>File Upload in JavaScript is annoying (but possible)</li></ul>");

  this.setButtonSet(this._getButtonSet());
  this.setVisible(true);
};

goog.inherits(ui.cloud_files.UploadFileDialog, goog.ui.Dialog);

ui.cloud_files.UploadFileDialog.prototype._getButtonSet = function () {
  var buttonSet = new goog.ui.Dialog.ButtonSet();
  buttonSet.addButton({ key: "ChooseFile", caption: "Choose File" }, true);
  buttonSet.addButton({ key: "UploadFile", caption: "Upload" });
  buttonSet.addButton({ key: "Cancel", caption: "Cancel" }, false, true);

  return buttonSet;
}