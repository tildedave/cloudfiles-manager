goog.provide('ui.cloud_files.ConfirmFileDeleteDialog');

goog.require('goog.ui.Dialog');

/**
 * @constructor
 * @extends {goog.ui.Dialog}
 */
ui.cloud_files.ConfirmFileDeleteDialog = function (objectTable, container,
                                                   object) {
  goog.ui.Dialog.call(this);  
  this.container = container;
  this.object = object;

  this.setContent("<h2>Confirm Delete</h2><div>Are you sure you want to delete " +
                  object + " from container " + container + "?</div>");
  
  this.setButtonSet(new goog.ui.Dialog.ButtonSet.createOkCancel());
  goog.events.listen(this, goog.ui.Dialog.EventType.SELECT, function (e) {
    if (e.key === "ok") {
      window.console.log("you wanted to delete " + object +
                         " from container " + container);
      objectTable.deleteFile(object);
    }
  });
};

goog.inherits(ui.cloud_files.ConfirmFileDeleteDialog, goog.ui.Dialog);

