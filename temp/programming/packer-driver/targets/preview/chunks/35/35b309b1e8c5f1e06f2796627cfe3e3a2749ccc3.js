System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FileTools, _crd, READ_FILE_TYPE;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a33bf+zzulEgafshba+BHy+", "FileTools", undefined);

      (function (READ_FILE_TYPE) {
        READ_FILE_TYPE[READ_FILE_TYPE["DATA_URL"] = 0] = "DATA_URL";
        READ_FILE_TYPE[READ_FILE_TYPE["TEXT"] = 1] = "TEXT";
        READ_FILE_TYPE[READ_FILE_TYPE["BINARY"] = 2] = "BINARY";
        READ_FILE_TYPE[READ_FILE_TYPE["ARRAYBUFFER"] = 3] = "ARRAYBUFFER";
      })(READ_FILE_TYPE || (READ_FILE_TYPE = {}));

      _export("default", FileTools = class FileTools {
        static getInstance() {
          if (!FileTools._instance) {
            FileTools._instance = new FileTools();
          }

          return FileTools._instance;
        }

      });

      FileTools._instance = FileTools;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35b309b1e8c5f1e06f2796627cfe3e3a2749ccc3.js.map