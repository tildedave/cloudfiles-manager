goog.require("ui.Events");
goog.require("ui.cloud_files.EntityTable");
goog.require("ui.cloud_files.ContainerTable");
goog.require("model.cache.ContainerProvider");

goog.provide('ui.cloud_files.Bootstrap');

ui.cloud_files.Bootstrap.go = function () {
  var dispatcher = new ui.cloud_files.EntityTable();
  goog.events.dispatchEvent(dispatcher, ui.Events.SELECT_ALL_CONTAINERS);
};