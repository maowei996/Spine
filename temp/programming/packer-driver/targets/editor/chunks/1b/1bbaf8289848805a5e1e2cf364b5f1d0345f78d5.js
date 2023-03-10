System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SkeletManager, OptionScrollview, EventType, EventData, EventManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, MenuType, Menu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSkeletManager(extras) {
    _reporterNs.report("SkeletManager", "../Data/SkeletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOptionScrollview(extras) {
    _reporterNs.report("OptionScrollview", "./OptionScrollview", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventData(extras) {
    _reporterNs.report("EventData", "../Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../EventManager", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      SkeletManager = _unresolved_2.SkeletManager;
    }, function (_unresolved_3) {
      OptionScrollview = _unresolved_3.OptionScrollview;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
      EventData = _unresolved_4.EventData;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.default;
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
        MenuType[MenuType["MAX"] = 255] = "MAX";
      })(MenuType || (MenuType = {}));

      _export("Menu", Menu = (_dec = ccclass('Menu'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class Menu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fileOperPanel", _descriptor, this);

          _initializerDefineProperty(this, "animationPanel", _descriptor2, this);

          _initializerDefineProperty(this, "skinPanel", _descriptor3, this);

          _initializerDefineProperty(this, "skeletonPanel", _descriptor4, this);

          this._loop = true;
        }

        start() {}

        updateOperPanle(operType, visible) {
          this.fileOperPanel.active = operType == MenuType.FILE ? visible : false;
          this.animationPanel.active = operType == MenuType.ANIMATION ? visible : false;
          this.skinPanel.active = operType == MenuType.SKIN ? visible : false;
          this.skeletonPanel.active = operType == MenuType.SKEL ? visible : false;
        }

        onFileMenu() {
          let active = this.fileOperPanel.active;
          this.fileOperPanel.active = !active;
          this.updateOperPanle(MenuType.FILE, !active);
        }

        onSkeleron() {
          let active = this.skeletonPanel.active;
          this.skeletonPanel.active = !active;
          this.updateOperPanle(MenuType.SKEL, !active);
        }

        onAnimation() {
          let active = this.animationPanel.active;
          this.animationPanel.active = !active;
          this.updateOperPanle(MenuType.ANIMATION, !active);

          if (!active) {
            let skelet = (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
              error: Error()
            }), SkeletManager) : SkeletManager).getInstance().skelet;

            if (!skelet) {
              return console.log('[Menu]:not SpineData!!');
            }

            let array = skelet.animations || [];

            if (array.length < 1) {
              array.push('???????????????!');
              array.push('??????');
            }

            let option = this.animationPanel.getComponent(_crd && OptionScrollview === void 0 ? (_reportPossibleCrUseOfOptionScrollview({
              error: Error()
            }), OptionScrollview) : OptionScrollview);
            option.setData(2, array);
          }
        }

        onSkin() {
          let active = this.skinPanel.active;
          this.skinPanel.active = !active;
          this.updateOperPanle(MenuType.SKIN, !active);

          if (!active) {
            let skelet = (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
              error: Error()
            }), SkeletManager) : SkeletManager).getInstance().skelet;

            if (!skelet) {
              return console.log('[Menu]:not SpineData!!');
            }

            let array = skelet.skins || [];

            if (array.length < 1) {
              array.push('????????????!');
              array.push('??????');
            }

            let option = this.skinPanel.getComponent(_crd && OptionScrollview === void 0 ? (_reportPossibleCrUseOfOptionScrollview({
              error: Error()
            }), OptionScrollview) : OptionScrollview);
            option.setData(3, array);
          }
        }

        onToggleDebug() {
          this.updateOperPanle(MenuType.MAX, false);
        }

        onToggleLoop() {
          this._loop = !this._loop;
          let param = new (_crd && EventData === void 0 ? (_reportPossibleCrUseOfEventData({
            error: Error()
          }), EventData) : EventData)();
          param.eventType = (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE_LOOP;
          ;
          param.param = this._loop;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).getInstance().emit('machine', param);
        }

        inputEvent(data) {
          let number = Number(data.string);
          console.log('========????????????!', number);
          let param = new (_crd && EventData === void 0 ? (_reportPossibleCrUseOfEventData({
            error: Error()
          }), EventData) : EventData)();
          param.eventType = (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_SCALE;
          ;
          param.param = number;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).getInstance().emit('machine', param);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fileOperPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animationPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skinPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skeletonPanel", [_dec5], {
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
//# sourceMappingURL=1bbaf8289848805a5e1e2cf364b5f1d0345f78d5.js.map