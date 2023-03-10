System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, assetManager, Texture2D, sp, FileTools, Html5, Sprite, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Machine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFileTools(extras) {
    _reporterNs.report("FileTools", "./FileTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHtml(extras) {
    _reporterNs.report("Html5", "./Html5", _context.meta, extras);
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
      assetManager = _cc.assetManager;
      Texture2D = _cc.Texture2D;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      FileTools = _unresolved_2.default;
    }, function (_unresolved_3) {
      Html5 = _unresolved_3.Html5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3a9fybJtdLx4tCl3ZVxMrH", "Machine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'assetManager', 'Texture2D', 'SpriteFrame', 'ImageAsset', 'sp']);

      __checkObsolete__(['Sprite']);

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

        start() {}

        onTest() {
          console.log('==========????????????????????????');
          let spr = this.sp;
          let self = this;
          /***/

          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).HtmlFileInput(function (file) {
            console.log('===========??????????????????-data:', file);
            (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
              error: Error()
            }), Html5) : Html5).LoadImage(file, spr, function (texture) {
              self.spineTexture = texture;
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
              console.log('===========??????Json??????-data:', data);
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
              console.log('===========??????Atlas??????-data:', data);
              self.spineAtlas = data;
              self.addSpine();
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
          let spineNode = new Node();
          spineNode.name = 'newSpine';
          spineNode.setPosition(0, 0);
          var skeleton = spineNode.addComponent(sp.Skeleton); // skeleton.parent = this.node;

          cc.find("Canvas").addChild(spineNode);
          let asset = new sp.SkeletonData();
          asset.skeletonJson = this.spineJson;
          asset.atlasText = this.spineAtlas;
          asset.textures = [this.spineTexture];
          asset.textureNames = ['xxx1122.png'];
          skeleton.skeletonData = asset;
          skeleton.animation = 'beiji'; //skeleton._updateSkeletonData();
        }

        onLoadSpine() {
          if (cc.find('Canvas/newSpine')) {
            cc.find('Canvas/newSpine').destroy();
          } else {
            var spineNode = new cc.Node();
            spineNode.name = 'newSpine';
            spineNode.setPosition(49, -237);
            var skeleton = spineNode.addComponent(sp.Skeleton);
            cc.find("Canvas").addChild(spineNode); //TODO : ?????????????????????????????????
            // var imageUrl = "http://127.0.0.1:7456/assets/resources/spineRaptor/raptor.png";
            // var skeUrl = "http://127.0.0.1:7456/assets/resources/spineRaptor/raptor.json";
            // var atlasUrl = "http://127.0.0.1:7456/assets/resources/spineRaptor/raptor.atlas";

            var imageUrl = "http://127.0.0.1/raptor.png";
            var skeUrl = "http://127.0.0.1/raptor.json";
            var atlasUrl = "http://127.0.0.1/raptor.atlas";
            cc.loader.load(imageUrl, (error, texture) => {
              cc.loader.load({
                url: atlasUrl,
                type: 'txt'
              }, (error, atlasJson) => {
                cc.loader.load({
                  url: skeUrl,
                  type: 'txt'
                }, (error, spineJson) => {
                  var asset = new sp.SkeletonData();
                  asset._uuid = skeUrl;
                  asset.skeletonJson = spineJson;
                  asset.atlasText = atlasJson;
                  asset.textures = [texture];
                  asset.textureNames = ['raptor.png'];
                  skeleton.skeletonData = asset; // skeleton.animation = 'walk';
                  // skeleton._updateSkeletonData();
                });
              });
            });
          }
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
            assetManager.loadRemote(image, (error, texture) => {
              let asset = new sp.SkeletonData();
              asset.skeletonJson = assets[1];
              asset.atlasText = assets[0];
              asset.textures = [texture];
              asset.textureNames = ['test_guai_001.png'];
              skeleton.skeletonData = asset;
            });
          });
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
//# sourceMappingURL=b2cfb7297fae6ed4912d8329e1fa7252ef676b2d.js.map