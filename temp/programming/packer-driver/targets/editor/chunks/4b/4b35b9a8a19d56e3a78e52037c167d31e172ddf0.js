System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, FileTools, _dec, _class, _crd, ccclass, property, Machine;

  function _reportPossibleCrUseOfFileTools(extras) {
    _reporterNs.report("FileTools", "./FileTools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      FileTools = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3a9fybJtdLx4tCl3ZVxMrH", "Machine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Machine", Machine = (_dec = ccclass('Machine'), _dec(_class = class Machine extends Component {
        start() {
          (_crd && FileTools === void 0 ? (_reportPossibleCrUseOfFileTools({
            error: Error()
          }), FileTools) : FileTools).getInstance().readLocalFile(null, 1, function () {});
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b35b9a8a19d56e3a78e52037c167d31e172ddf0.js.map