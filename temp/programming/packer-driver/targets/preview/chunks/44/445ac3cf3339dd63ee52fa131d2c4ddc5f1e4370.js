System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventManager, Html5, SpineData, SkeletManager, EventType, EventData, _decorator, Component, sp, _dec, _class, _crd, ccclass, property, FileOper;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHtml(extras) {
    _reporterNs.report("Html5", "../Tool/Html5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineData(extras) {
    _reporterNs.report("SpineData", "../Data/SpineData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletManager(extras) {
    _reporterNs.report("SkeletManager", "../Data/SkeletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventData(extras) {
    _reporterNs.report("EventData", "../Define", _context.meta, extras);
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
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Html5 = _unresolved_3.Html5;
    }, function (_unresolved_4) {
      SpineData = _unresolved_4.SpineData;
    }, function (_unresolved_5) {
      SkeletManager = _unresolved_5.SkeletManager;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
      EventData = _unresolved_6.EventData;
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
          this._url = '';
          this._key = '';
          this._nativeUrl = '';
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
          this._key = '';
          this._nativeUrl = '';
          this.node.active = false;
        }

        checkComplect() {
          if (this._atlasData && this._textureData) {
            if (this._jsonData || this._skeletData) {
              console.log('[FileOper]:数据读取完成');
              this._bComplete = true;
              this._bJson = this._jsonData ? true : false;
              this._bBinary = this._skeletData ? true : false;
            }
          }

          if (this._bComplete) {
            this.addSkeletonData();
          }
        }

        addSkeletonData() {
          var _skeletonJson$bones, _skeletonJson$slots;

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
            asset._uuid = this._pngName + 'skel_spine';
            asset._nativeUrl = this._nativeUrl;
          }

          var data = new (_crd && SpineData === void 0 ? (_reportPossibleCrUseOfSpineData({
            error: Error()
          }), SpineData) : SpineData)();
          data.bJson = this._bJson;
          data.bBinary = this._bBinary;
          data.name = this._pngName;
          data.url = this._url;
          data.key = this._key;
          data._jsonData = this._jsonData;
          data._atlasData = this._atlasData;
          data._skeletData = this._skeletData;
          data._textureData = this._textureData;
          data.skeletonData = asset;

          if (asset.skeletonJson && asset.skeletonJson.skeleton) {
            data.width = asset.skeletonJson.skeleton.width;
            data.height = asset.skeletonJson.skeleton.height;
            data.version = asset.skeletonJson.skeleton.spine;
          }

          var _skeletonJson = asset.skeletonJson || new Object();

          var animations = _skeletonJson.animations || [];
          var skins = _skeletonJson.skins || [];
          var events = _skeletonJson.events || {};
          data.bones = (_skeletonJson$bones = _skeletonJson.bones) == null ? void 0 : _skeletonJson$bones.length;
          data.slots = (_skeletonJson$slots = _skeletonJson.slots) == null ? void 0 : _skeletonJson$slots.length;

          for (var key in animations) {
            data.animations.push(key);
          }

          if (skins instanceof Array) {
            for (var iterator of skins) {
              data.skins.push(iterator.name);
            }
          } else {
            data.skins.push('default');
          }

          for (var _iterator in events) {
            data.events.push(_iterator);
          }

          data.defanimation = data.animations[0];
          (_crd && SkeletManager === void 0 ? (_reportPossibleCrUseOfSkeletManager({
            error: Error()
          }), SkeletManager) : SkeletManager).getInstance().add(data);
          var param = new (_crd && EventData === void 0 ? (_reportPossibleCrUseOfEventData({
            error: Error()
          }), EventData) : EventData)();
          param.eventType = (_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).REFRESH_SKELETON;
          param.param = data; // console.log('SkeletonData:',data);

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).getInstance().emit('machine', param);
          this.rest();
        }

        onPng() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readTexture2d(function (name, url, texture) {
            self._textureData = texture;
            self._pngName = name;
            self._url = url;
            self.checkComplect();
          });
        }

        onJsonData() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (name, data) {
            self._jsonData = data;
            self.checkComplect();
          });
        }

        onAtlasData() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (name, data) {
            self._atlasData = data;
            self._key = name.split('.')[0];
            self.checkComplect();
          });
        }

        onSkelData() {
          var self = this;
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).readLocalFile(function (name, data, url) {
            // console.log('name:',name);
            // console.log('url:',url)
            // console.log('skel:',data);
            self._nativeUrl = url;
            self._skeletData = data;
            self.checkComplect();
          }, 3);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=445ac3cf3339dd63ee52fa131d2c4ddc5f1e4370.js.map