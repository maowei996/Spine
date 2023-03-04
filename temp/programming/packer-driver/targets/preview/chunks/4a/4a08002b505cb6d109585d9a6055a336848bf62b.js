System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, sp, Label, EventManager, EventType, SkeletManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, Machine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventData(extras) {
    _reporterNs.report("EventData", "./Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletManager(extras) {
    _reporterNs.report("SkeletManager", "./Data/SkeletManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      sp = _cc.sp;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      SkeletManager = _unresolved_4.SkeletManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3a9fybJtdLx4tCl3ZVxMrH", "Machine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'assetManager', 'Texture2D', 'SpriteFrame', 'ImageAsset', 'sp', 'Label', 'math']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Machine", Machine = (_dec = ccclass('Machine'), _dec2 = property(Sprite), _dec3 = property(sp.Skeleton), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = class Machine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sp", _descriptor, this);

          _initializerDefineProperty(this, "skeleton", _descriptor2, this);

          _initializerDefineProperty(this, "fpsLaebl", _descriptor3, this);

          _initializerDefineProperty(this, "szLaebl", _descriptor4, this);

          _initializerDefineProperty(this, "versionLaebl", _descriptor5, this);

          _initializerDefineProperty(this, "bonesLaebl", _descriptor6, this);

          _initializerDefineProperty(this, "slotsLaebl", _descriptor7, this);

          this.spineJson = null;
          this.spineAtlas = null;
          this.spineTexture = null;
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).getInstance().on('machine', this.onEvent, this);
        }

        onEvent(data) {
          console.log('[Machine]收到了事件消息_type:', data.eventType);
          var _eventType = data.eventType;
          var skeleton = this.skeleton;

          if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).REFRESH_SKELETON) {
            skeleton.skeletonData = data.param.skeletonData;
            skeleton.animation = data.param.defanimation;

            if (data.param.bBinary) {
              data.param.parse(data.param.skeletonData._skeletonCache);
              skeleton.animation = data.param.defanimation;
            }

            this.updateUI(); // console.log('onEvent.skeleton:',skeleton);
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE) {
            //切换角色
            console.log('切换角色');
            var spineKey = data.param;
            var spineDate = (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
              error: Error()
            }), SkeletManager) : SkeletManager).getInstance().get(spineKey);

            if (spineDate) {
              skeleton.skeletonData = spineDate.skeletonData;
              skeleton.animation = spineDate.defanimation;
              (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
                error: Error()
              }), SkeletManager) : SkeletManager).getInstance().skelet = spineDate;
              this.updateUI();
            }
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE_ANIMATION) {
            skeleton.animation = data.param;
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_SPINE_SKIN) {
            skeleton.setSkin(data.param);
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OPENOROFF_DEBUG) {} else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE_LOOP) {
            skeleton.loop = data.param;
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_SCALE) {
            skeleton.node.setScale(data.param, data.param, 1); // = data.param;
          }
        }

        updateUI() {
          var skelet = (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
            error: Error()
          }), SkeletManager) : SkeletManager).getInstance().skelet;
          this.fpsLaebl.string = 'fps:' + (skelet.fps == 0 ? 30 : skelet.fps).toString();
          this.szLaebl.string = 'width:' + Math.ceil(skelet.width) + " " + 'height:' + Math.ceil(skelet.height);
          this.versionLaebl.string = 'version:' + skelet.version;
          this.bonesLaebl.string = 'bones:' + skelet.bones;
          this.slotsLaebl.string = 'slots:' + skelet.slots;
        }

        onDisable() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).getInstance().off('machine', this.onEvent, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fpsLaebl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "szLaebl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "versionLaebl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bonesLaebl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "slotsLaebl", [_dec8], {
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
//# sourceMappingURL=4a08002b505cb6d109585d9a6055a336848bf62b.js.map