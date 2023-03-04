System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Eventparam, _crd, EventType;

  _export({
    Eventparam: void 0,
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

      _export("Eventparam", Eventparam = class Eventparam {
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
//# sourceMappingURL=c1a87cc4399f9f02f608ecf16d6c5b174b43e503.js.map