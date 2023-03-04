System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, assetManager, Texture2D, sp, FileTools, Html5, EventManager, EventType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Machine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFileTools(extras) {
    _reporterNs.report("FileTools", "./Tool/FileTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHtml(extras) {
    _reporterNs.report("Html5", "./Tool/Html5", _context.meta, extras);
  }

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
      FileTools = _unresolved_2.default;
    }, function (_unresolved_3) {
      Html5 = _unresolved_3.Html5;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
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
        constructor(...args) {
          super(...args);

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
          let _eventType = data.eventType;
          let skeleton = this.skeleton;

          if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).REFRESH_SKELETON) {
            skeleton.skeletonData = data.param.skeletonData;
            skeleton.animation = 'beiji';
          } else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE) {} else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE_ANIMATION) {} else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_SPINE_SKIN) {} else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).OPENOROFF_DEBUG) {} else if (_eventType == (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_SPINE_LOOP) {
            skeleton.loop = data.param.loop;
          }
        }

        onTest() {
          console.log('==========点击测试按钮！！');
          let spr = this.sp;
          let self = this;
          /***/

          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).HtmlFileInput(function (file) {
            console.log('===========选择文件成功-data:', file);
            (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
              error: Error()
            }), Html5) : Html5).LoadImage(file, spr, function (texture) {
              self.spineTexture = texture;
              spr.node.active = false;
            });
          });
        }

        loadJson() {
          let self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).HtmlFileInput(function (file) {
            (_crd && FileTools === void 0 ? (_reportPossibleCrUseOfFileTools({
              error: Error()
            }), FileTools) : FileTools).getInstance().readLocalFile(file, 1, function (data) {
              console.log('===========读取Json成功-data:', data);
              self.spineJson = data;
            });
          });
        }

        loadAtlas() {
          let self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).HtmlFileInput(function (file) {
            (_crd && FileTools === void 0 ? (_reportPossibleCrUseOfFileTools({
              error: Error()
            }), FileTools) : FileTools).getInstance().readLocalFile(file, 1, function (data) {
              console.log('===========读取Atlas成功-data:', data);
              self.spineAtlas = data; //self.addSpine();
            });
          });
        }

        loadRemoto() {
          //const base = url;
          //assetManager.loadRemote(base, { ext: '.png' }, (err: Error, texture: Texture2D) => {
          let sp = this.sp;
          let base = 'http://127.0.0.1/image/Socre_CandyMonsters_Scatter.png';
          assetManager.loadRemote(base, (err, asset) => {
            if (err) return cc.error(err);
            console.log('asset:', asset);
            let texture = new Texture2D();
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
          let skeleton = this.skeleton;
          let asset = new sp.SkeletonData();
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
          let skeleton = this.skeleton;
          let image = "http://127.0.0.1/test_guai_001.png";
          let ske = "http://127.0.0.1/test_guai_001.json";
          let atlas = "http://127.0.0.1/test_guai_001.atlas";
          assetManager.loadAny([{
            url: atlas,
            ext: '.txt'
          }, {
            url: ske,
            ext: '.txt'
          }], (error, assets) => {
            assetManager.loadRemote(image, (error, imageAsset) => {
              let texture = new Texture2D();
              texture.image = imageAsset;
              let asset = new sp.SkeletonData();
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
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec3], {
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
//# sourceMappingURL=f17efb0aac651eab51407135f872df0fc35f77cc.js.map