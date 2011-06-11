goog.provide('ui.cloud_files.CreateContainerDialog');

goog.require('goog.dom');
goog.require('goog.ui.Dialog');

/**
 * @constructor
 * @extends {goog.ui.Dialog}
 */

ui.cloud_files.CreateContainerDialog = function (containerTable) {
  goog.ui.Dialog.call(this);  

  this.setContent("<h2>Create Container</h2>" +
                  "<input id='containerNameInput' type='text'>");
  
  this.setButtonSet(new goog.ui.Dialog.ButtonSet.createOkCancel());
  goog.events.listen(this, goog.ui.Dialog.EventType.SELECT, function (e) {
    if (e.key === "ok") {
      var input = goog.dom.getElement("containerNameInput");
      containerTable.createContainer(input.value);
    }
  });
};
goog.inherits(ui.cloud_files.CreateContainerDialog, goog.ui.Dialog);

