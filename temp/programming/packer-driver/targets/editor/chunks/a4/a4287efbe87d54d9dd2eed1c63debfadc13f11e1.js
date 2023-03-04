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
          this._jsonData = null;
          this._atlasData = null;
          this._skeletData = null;
          this._textureData = null;
          this.width = 0;
          this.height = 0;
          this.fps = 0;
          this.skeletonData = null;
          this.skins = new Array();
          this.animations = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4287efbe87d54d9dd2eed1c63debfadc13f11e1.js.map