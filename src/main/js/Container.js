goog.provide('ui.cloud_files.Container');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('ui.Events');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ui.cloud_files.Container = function (dom, broker) {
  goog.events.EventTarget.call(this);
  var text = goog.dom.getTextContent(dom);
  goog.events.listen(dom, goog.events.EventType.CLICK, function (e) {
    var event = new goog.events.Event(ui.Events.SELECT_CONTAINER,
                                      { name: text });
    
    goog.events.dispatchEvent(event, broker);
  });
};

goog.inherits(ui.cloud_files.Container, goog.events.EventTarget);

