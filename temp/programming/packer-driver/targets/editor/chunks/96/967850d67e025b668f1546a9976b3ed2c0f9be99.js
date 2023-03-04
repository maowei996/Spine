System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventData, _crd, EventType, ViewType;

  _export({
    EventData: void 0,
    EventType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab0d5Ig2d9CvIOYQDmI8H/n", "Define", undefined);

      (function (EventType) {
        EventType[EventType["NONE"] = 0] = "NONE";
        EventType[EventType["REFRESH_SKELETON"] = 1] = "REFRESH_SKELETON";
        EventType[EventType["CHANGE_SPINE"] = 2] = "CHANGE_SPINE";
        EventType[EventType["CHANGE_SPINE_ANIMATION"] = 3] = "CHANGE_SPINE_ANIMATION";
        EventType[EventType["UPDATE_SPINE_SKIN"] = 4] = "UPDATE_SPINE_SKIN";
        EventType[EventType["OPENOROFF_DEBUG"] = 5] = "OPENOROFF_DEBUG";
        EventType[EventType["CHANGE_SPINE_LOOP"] = 6] = "CHANGE_SPINE_LOOP";
        EventType[EventType["UPDATE_SCALE"] = 7] = "UPDATE_SCALE";
      })(EventType || _export("EventType", EventType = {}));

      (function (ViewType) {
        ViewType[ViewType["none"] = 0] = "none";
        ViewType[ViewType["Spine_view"] = 1] = "Spine_view";
        ViewType[ViewType["Animation_view"] = 2] = "Animation_view";
        ViewType[ViewType["Skin_viwe"] = 3] = "Skin_viwe";
      })(ViewType || (ViewType = {}));

      _export("EventData", EventData = class EventData {
        constructor() {
          this.eventType = EventType.NONE;
          this.param = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=967850d67e025b668f1546a9976b3ed2c0f9be99.js.map