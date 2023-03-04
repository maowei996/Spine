System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, assetManager, Texture2D, sp, EventManager, EventType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Machine;

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
      assetManager = _cc.assetManager;
      Texture2D = _cc.Texture2D;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3a9fybJtdLx4tCl3ZVxMrH", "Machine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'assetManager', 'Texture2D', 'SpriteFrame', 'ImageAsset', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Machine", Machine = (_dec = ccclass('Machine'), _dec2 = property(Sprite), _dec3 = property(sp.Skeleton), _dec(_class = (_class2 = class Machine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sp", _descriptor, this);

          _initializerDefineProperty(this, "skeleton", _descriptor2, this);

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
            console.log('onEvent.skeleton:', skeleton);
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE) {} else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
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

        loadRemoto() {
          var sp = this.sp;
          var base = 'http://127.0.0.1/image/Socre_CandyMonsters_Scatter.png';
          assetManager.loadRemote(base, (err, asset) => {
            if (err) return cc.error(err);
            console.log('asset:', asset);
            var texture = new Texture2D();
            texture.image = asset; // sp.spriteFrame = new SpriteFrame();
            // sp.spriteFrame.setTexture(texture)
            // sp.spriteFrame._texture = texture
            // sp.spriteFrame._texture = texture.getHtmlElementObj()

            sp.spriteFrame.texture = texture;
          });
        }

        addSpine() {
          // let spineNode = new Node();
          // spineNode.name = 'newSpine';
          // spineNode.setPosition(0,0);
          // var skeleton = spineNode.addComponent(sp.Skeleton);
          // // skeleton.parent = this.node;
          // cc.find("Canvas").addChild(spineNode);
          var skeleton = this.skeleton;
          var asset = new sp.SkeletonData();
          asset.skeletonJson = this.spineJson;
          asset.atlasText = this.spineAtlas;
          asset.textures = [this.spineTexture];
          asset.textureNames = ['test_guai_001.png'];
          skeleton.skeletonData = asset;
          skeleton.animation = 'beiji'; //skeleton._updateSkeletonData();
        }

        onLoadSpine2() {
          // let comp = this.getComponent('sp.Skeleton') as sp.Skeleton;
          // var spineNode = new cc.Node();
          // spineNode.name = 'newSpine';
          // spineNode.setPosition(49, -237);
          // var skeleton = spineNode.addComponent(sp.Skeleton);
          // cc.find("Canvas").addChild(spineNode);
          var skeleton = this.skeleton;
          var image = "http://127.0.0.1/test_guai_001.png";
          var ske = "http://127.0.0.1/test_guai_001.json";
          var atlas = "http://127.0.0.1/test_guai_001.atlas";
          assetManager.loadAny([{
            url: atlas,
            ext: '.txt'
          }, {
            url: ske,
            ext: '.txt'
          }], (error, assets) => {
            assetManager.loadRemote(image, (error, imageAsset) => {
              var texture = new Texture2D();
              texture.image = imageAsset;
              var asset = new sp.SkeletonData();
              asset.skeletonJson = assets[1];
              asset.atlasText = assets[0];
              asset.textures = [texture];
              asset.textureNames = ['test_guai_001.png'];
              skeleton.skeletonData = asset;
              skeleton.animation = 'beiji';
            });
          });
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e80dc3f98ec4be12e8957c20a60403de60387340.js.map