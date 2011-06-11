goog.provide('ui.cloud_files.Container');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('ui.Events');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ui.cloud_files.Container = function (dom) {
  goog.events.EventTarget.call(this);

  var parentObj = this;
  goog.events.listen(this.dom, goog.events.EventType.CLICK,
                     function (e) {
                       parentObj.dispatchEvent(ui.Events.SELECT_CONTAINER,
                                               goog.dom.getTextContent(this));
                     });
};

goog.inherits(ui.cloud_files.Container, goog.events.EventTarget);
