System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, ScrollView, instantiate, ItemOption, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ViewType, OptionScrollview;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemOption(extras) {
    _reporterNs.report("ItemOption", "./ItemOption", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ItemOption = _unresolved_2.ItemOption;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4793bJ9a+lDepO/Pw2B7BAX", "OptionScrollview", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'ScrollView', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (ViewType) {
        ViewType[ViewType["files"] = 0] = "files";
      })(ViewType || (ViewType = {}));

      _export("OptionScrollview", OptionScrollview = (_dec = ccclass('OptionScrollview'), _dec2 = property(Prefab), _dec(_class = (_class2 = class OptionScrollview extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemOption", _descriptor, this);

          this._curChooseName = '';
        }

        start() {
          this.loadLisit([]);
        }

        loadLisit(array) {
          let content = this.getComponent(ScrollView).content;
          content.removeAllChildren();

          for (let i = 0; i < 10; i++) {
            let item = instantiate(this.itemOption);
            content.addChild(item);
            let option = item.getComponent(_crd && ItemOption === void 0 ? (_reportPossibleCrUseOfItemOption({
              error: Error()
            }), ItemOption) : ItemOption);
            option.itemName = 'anim' + i;

            option.clickFunc = function (ani) {
              this.choose(ani);
            }.bind(this);
          }
        }

        choose(animation) {
          console.log('choose:', animation, this._curChooseName);

          if (this._curChooseName != animation) {
            this._curChooseName = animation;
            console.log('========选择item选项_name = ', animation);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemOption", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d02d6c4c95a24c44442d309ed8eaf7b0bb1554d1.js.map