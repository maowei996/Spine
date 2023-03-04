System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SpineData, _crd;

  _export("SpineData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5485205nv9FqKEEOqNEBmMP", "SpineData", undefined);

      __checkObsolete__(['Texture2D', 'sp']);

      _export("SpineData", SpineData = class SpineData {
        constructor() {
          this.bJson = false;
          this.bBinary = false;
          this.name = '';
          this.key = '';
          this.url = '';
          this.version = '0.0.0';
          this.defanimation = '';
          this._jsonData = null;
          this._atlasData = null;
          this._skeletData = null;
          this._textureData = null;
          this.width = 0;
          this.height = 0;
          this.fps = 0;
          this.bones = 0;
          this.slots = 0;
          this.skeletonData = null;
          this.events = new Array();
          this.skins = new Array();
          this.animations = [];
        }

        parse(_skeletonCashe) {
          var _skeletonCashe$bones, _skeletonCashe$slots;

          this.width = _skeletonCashe.width;
          this.height = _skeletonCashe.height;
          this.version = _skeletonCashe.version;
          this.fps = _skeletonCashe.fps;
          var animations = _skeletonCashe.animations || [];
          var skins = _skeletonCashe.skins || [];
          var events = _skeletonCashe.events || [];
          this.bones = (_skeletonCashe$bones = _skeletonCashe.bones) == null ? void 0 : _skeletonCashe$bones.length;
          this.slots = (_skeletonCashe$slots = _skeletonCashe.slots) == null ? void 0 : _skeletonCashe$slots.length;

          for (var v of animations) {
            var name = v.name; // + v.duration || '';

            if (v.duration) {
              name = name + '-' + (v.duration > 0 ? v.duration : 0).toString();
            }

            this.animations.push(name);
          }

          if (skins instanceof Array) {
            for (var iterator of skins) {
              this.skins.push(iterator.name);
            }
          } else {
            this.skins.push('default');
          }

          for (var _iterator of events) {
            this.events.push(_iterator.name || 'error');
          }

          this.defanimation = this.animations[0];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21d41686fbe07606fec889c41ae01dc7a2402505.js.map