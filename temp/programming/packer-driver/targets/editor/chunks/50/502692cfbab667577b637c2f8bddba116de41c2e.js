System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkeletManager, _crd;

  function _reportPossibleCrUseOfSpineData(extras) {
    _reporterNs.report("SpineData", "./SpineData", _context.meta, extras);
  }

  _export("SkeletManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec798MJuCRGSYoLR6kiN9Ed", "SkeletManager", undefined);

      _export("SkeletManager", SkeletManager = class SkeletManager {
        constructor() {
          this._skeletons = [];
          this._map = new Map();
          this._curskeleton = null;
        }

        static getInstance() {
          if (!SkeletManager._instance) {
            SkeletManager._instance = new SkeletManager();
          }

          return SkeletManager._instance;
        }

        add(data) {
          if (this._map.has(data.key)) {
            return;
          }

          this._map.set(data.key, data);

          this._skeletons.push(data);

          this.skelet = data;
        }

        get skeletons() {
          return this._skeletons;
        }

        get(key) {
          return this._map[key];
        }

        set skelet(v) {
          this._curskeleton = v;
        }

        get skelet() {
          return this._curskeleton;
        }

        get count() {
          return this._map.size;
        }

        destroy() {
          this._map = null;
        }

      });

      SkeletManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=502692cfbab667577b637c2f8bddba116de41c2e.js.map