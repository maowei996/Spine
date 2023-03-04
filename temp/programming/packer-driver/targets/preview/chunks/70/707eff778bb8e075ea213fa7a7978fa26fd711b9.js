System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventData, _crd, EventType;

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
      })(EventType || _export("EventType", EventType = {}));

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
//# sourceMappingURL=707eff778bb8e075ea213fa7a7978fa26fd711b9.js.map