goog.provide('ui.cloud_files.UploadFileDialog');

goog.require('goog.ui.Dialog');
goog.require('goog.events');

/**
 * @constructor
 * @extends {goog.ui.Dialog}
 */
ui.cloud_files.UploadFileDialog = function (container) {
  goog.ui.Dialog.call(this);  
  this.container = container;

  var uploadUrl = "/upload/" + container;
  this.setContent("<h2>Upload a File</h2><ul><li>Not implemented yet</li>" +
                  "<li>File Upload in JavaScript is annoying (but possible)</li>" +
                  "</ul>" +
                  '<form id="fileUploadForm" action="' + uploadUrl + '" ' +
                       ' method="post" enctype="multipart/form-data">' +
                  '<input type="file" name="file" id="fileUpload">' +
                  '</form>');

  this.setButtonSet(this._getButtonSet());
  goog.events.listen(this, goog.ui.Dialog.EventType.SELECT, function (e) {
    if (e.key === ui.cloud_files.UploadFileDialog.ChooseFile) {
      // not working now -- need to figure out how we can avoid closing
      // dialog
      goog.events.dispatchEvent(goog.dom.getElement("fileUpload"),
                                goog.events.EventType.CLICK);
    }
    if (e.key === ui.cloud_files.UploadFileDialog.UploadFile) {
      goog.dom.getElement("fileUploadForm").submit();
    }
  });
  this.setVisible(true);
};

goog.inherits(ui.cloud_files.UploadFileDialog, goog.ui.Dialog);

ui.cloud_files.UploadFileDialog.ChooseFile = "ChooseFile";
ui.cloud_files.UploadFileDialog.UploadFile = "UploadFile";
ui.cloud_files.UploadFileDialog.Cancel = "Cancel";

ui.cloud_files.UploadFileDialog.prototype._getButtonSet = function () {
  var buttonSet = new goog.ui.Dialog.ButtonSet();
  /*
  buttonSet.addButton({ key: ui.cloud_files.UploadFileDialog.ChooseFile,
                        caption: "Choose File" }, true);
   */
  buttonSet.addButton({ key: ui.cloud_files.UploadFileDialog.UploadFile,
                        caption: "Upload" });
  buttonSet.addButton({ key: ui.cloud_files.UploadFileDialog.Cancel,
                        caption: "Cancel" }, false, true);

  return buttonSet;
}