System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Menu;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88d4fTaC9pOSLwHQGdxrl1o", "Menu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Menu", Menu = (_dec = ccclass('Menu'), _dec(_class = class Menu extends Component {
        start() {}

        onFileMenu() {}

        onSkeleron() {}

        onAnimation() {}

        onSkil() {}

        onToggleDebug() {}

        onToggleLoop() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c53915bd941e04fb736b5ca31e4c8c36e17be928.js.map