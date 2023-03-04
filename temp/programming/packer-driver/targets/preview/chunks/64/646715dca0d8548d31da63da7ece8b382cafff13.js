System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Html5, SpineData, _decorator, Component, sp, _dec, _class, _crd, ccclass, property, FileOper;

  function _reportPossibleCrUseOfHtml(extras) {
    _reporterNs.report("Html5", "../Tool/Html5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineData(extras) {
    _reporterNs.report("SpineData", "../Data/SpineData", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Html5 = _unresolved_2.Html5;
    }, function (_unresolved_3) {
      SpineData = _unresolved_3.SpineData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b2a9oF91RJjYIyEwttaok5", "FileOper", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Texture2D', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FileOper", FileOper = (_dec = ccclass('FileOper'), _dec(_class = class FileOper extends Component {
        constructor() {
          super(...arguments);
          this._bComplete = false;
          this._bBinary = false;
          this._bJson = false;
          this._jsonData = null;
          this._atlasData = null;
          this._skeletData = null;
          this._textureData = null;
          this._pngName = 'defa';
        }

        rest() {
          this._bComplete = false;
          this._bBinary = false;
          this._bJson = false;
          this._jsonData = null;
          this._atlasData = null;
          this._skeletData = null;
          this._textureData = null;
          this._pngName = 'defa';
        }

        checkComplect() {
          if (this._atlasData && this._textureData) {
            if (this._jsonData || this._skeletData) {
              console.log('[FileOper]:数据读取完成');
              this._bComplete = true;
              this._bJson = this._jsonData || false;
              this._bBinary = this._skeletData || false;
            }
          }

          if (this._bComplete) {
            this.addSkeletonData();
          }
        }

        addSkeletonData() {
          var asset = new sp.SkeletonData();

          if (this._bJson) {
            asset.skeletonJson = this._jsonData;
            asset.atlasText = this._atlasData;
            asset.textures = [this._textureData];
            asset.textureNames = [this._pngName];
          } else {
            asset._nativeAsset = this._skeletData;
            asset.atlasText = this._atlasData;
            asset.textures = [this._textureData];
            asset.textureNames = [this._pngName];
            asset._uuid = this._pngName + 'good'; // 传入一个二进制路径用作 initSkeleton 时的 filePath 参数使用

            asset._nativeUrl = 'sdsd';
          }

          var data = new (_crd && SpineData === void 0 ? (_reportPossibleCrUseOfSpineData({
            error: Error()
          }), SpineData) : SpineData)();
          data.bJson = this._bJson;
          data.bBinary = this._bBinary;
          data.sName = this._pngName;
          data._jsonData = this._jsonData;
          data._atlasData = this._atlasData;
          data._skeletData = this._skeletData;
          data._textureData = this._textureData;
          data.skeletonData = asset;
          data.skins = [];
          data.animations = [];
          this.rest();
        }

        onPng() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readTexture2d(function (texture) {
            console.log('===========选择文件成功-data:', texture);
            self._textureData = texture;
            self.checkComplect();
          });
        }

        onJsonData() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (data) {
            console.log('===========读取Json成功-data:', data);
            self._jsonData = data;
            self.checkComplect();
          });
        }

        onAtlasData() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (data) {
            console.log('===========读取Atlas成功-data:', data);
            self._atlasData = data;
            self.checkComplect();
          });
        }

        onSkelData() {
          this.checkComplect();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=646715dca0d8548d31da63da7ece8b382cafff13.js.map