System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, ScrollView, instantiate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AnimationPanel;

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
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4793bJ9a+lDepO/Pw2B7BAX", "AnimationPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'ScrollView', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationPanel", AnimationPanel = (_dec = ccclass('AnimationPanel'), _dec2 = property(Prefab), _dec(_class = (_class2 = class AnimationPanel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemOption", _descriptor, this);
        }

        start() {
          this.loadLisit([]);
        }

        loadLisit(array) {
          var content = this.getComponent(ScrollView).content;
          content.removeAllChildren();

          for (var i = 0; i < 10; i++) {
            var item = instantiate(this.itemOption);
            content.addChild(item);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemOption", [_dec2], {
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
//# sourceMappingURL=0c38071143056b6a32864fc4ec4dbbfc180fa020.js.map