System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Html5, SpineData, SkeletManager, _decorator, Component, sp, _dec, _class, _crd, ccclass, property, FileOper;

  function _reportPossibleCrUseOfHtml(extras) {
    _reporterNs.report("Html5", "../Tool/Html5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineData(extras) {
    _reporterNs.report("SpineData", "../Data/SpineData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletManager(extras) {
    _reporterNs.report("SkeletManager", "../Data/SkeletManager", _context.meta, extras);
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
    }, function (_unresolved_4) {
      SkeletManager = _unresolved_4.SkeletManager;
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
        constructor(...args) {
          super(...args);
          this._bComplete = false;
          this._bBinary = false;
          this._bJson = false;
          this._jsonData = null;
          this._atlasData = null;
          this._skeletData = null;
          this._textureData = null;
          this._pngName = 'defa';
          this._url = '';
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
          this._url = '';
        }

        checkComplect() {
          if (this._atlasData && this._textureData) {
            if (this._jsonData || this._skeletData) {
              console.log('[FileOper]:??????????????????');
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
          let asset = new sp.SkeletonData();

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
            asset._uuid = this._pngName + 'good'; // ????????????????????????????????? initSkeleton ?????? filePath ????????????

            asset._nativeUrl = 'sdsd';
          }

          let data = new (_crd && SpineData === void 0 ? (_reportPossibleCrUseOfSpineData({
            error: Error()
          }), SpineData) : SpineData)();
          data.bJson = this._bJson;
          data.bBinary = this._bBinary;
          data.name = this._pngName;
          data.url = this._url;
          data._jsonData = this._jsonData;
          data._atlasData = this._atlasData;
          data._skeletData = this._skeletData;
          data._textureData = this._textureData;
          data.skeletonData = asset;
          data.skins = [];
          data.animations = [];
          (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
            error: Error()
          }), SkeletManager) : SkeletManager).getInstance().add(data);
          this.rest();
        }

        onPng() {
          let self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readTexture2d(function (name, url, texture) {
            console.log('===========??????????????????-data:', name);
            self._textureData = texture;
            self._pngName = name;
            self._url = url;
            self.checkComplect();
          });
        }

        onJsonData() {
          let self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (data) {
            console.log('===========??????Json??????-data:', data);
            self._jsonData = data;
            self.checkComplect();
          });
        }

        onAtlasData() {
          let self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (data) {
            console.log('===========??????Atlas??????-data:', data);
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
//# sourceMappingURL=8d0931a6a7f137112ec46f232b1ee9a8aba1cdc5.js.map