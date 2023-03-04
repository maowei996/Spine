System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MenuType, Menu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88d4fTaC9pOSLwHQGdxrl1o", "Menu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (MenuType) {
        MenuType[MenuType["FILE"] = 0] = "FILE";
        MenuType[MenuType["SKEL"] = 1] = "SKEL";
        MenuType[MenuType["ANIMATION"] = 2] = "ANIMATION";
        MenuType[MenuType["SKIN"] = 3] = "SKIN";
      })(MenuType || (MenuType = {}));

      _export("Menu", Menu = (_dec = ccclass('Menu'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class Menu extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fileOperPanel", _descriptor, this);

          _initializerDefineProperty(this, "animationPanel", _descriptor2, this);

          _initializerDefineProperty(this, "skinPanel", _descriptor3, this);
        }

        start() {}

        updateOperPanle(operType) {
          this.fileOperPanel.active = operType == MenuType.FILE;
          this.animationPanel.active = operType == MenuType.ANIMATION;
          this.skinPanel.active = operType == MenuType.SKIN;
        }

        onFileMenu() {
          var active = this.fileOperPanel.active;
          this.fileOperPanel.active = !active;
          this.updateOperPanle(MenuType.FILE);
        }

        onSkeleron() {
          this.updateOperPanle(MenuType.SKEL);
        }

        onAnimation() {
          var active = this.animationPanel.active;
          this.animationPanel.active = !active;
          this.updateOperPanle(MenuType.ANIMATION);
        }

        onSkin() {
          var active = this.skinPanel.active;
          this.skinPanel.active = !active;
          this.updateOperPanle(MenuType.SKIN);
        }

        onToggleDebug() {}

        onToggleLoop() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fileOperPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animationPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skinPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5b5749ab2260476db4484243c14c5a44419c8be.js.map