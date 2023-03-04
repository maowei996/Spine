System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FileTools, _crd, ReadFileType;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a33bf+zzulEgafshba+BHy+", "FileTools", undefined);

      (function (ReadFileType) {
        ReadFileType[ReadFileType["DATA_URL"] = 0] = "DATA_URL";
        ReadFileType[ReadFileType["TEXT"] = 1] = "TEXT";
        ReadFileType[ReadFileType["BINARY"] = 2] = "BINARY";
        ReadFileType[ReadFileType["ARRAYBUFFER"] = 3] = "ARRAYBUFFER";
      })(ReadFileType || (ReadFileType = {}));

      _export("default", FileTools = class FileTools {
        static getInstance() {
          if (!FileTools._instance) {
            FileTools._instance = new FileTools();
          }

          return FileTools._instance;
        }
        /**
         * 读取本地文件数据
         * 数据
         * @param {File} _file
         * @param {ReadFileType} _readfileType
         * @param {((result: string | ArrayBuffer) => void)} _cb
         */


        readLocalFile(_file, _readfileType, _cb) {
          var reader = new FileReader();

          reader.onload = function (event) {
            if (event) {//console.log('readLocalFile:',event,event.result);
            }

            var result = null;

            if (reader.readyState == FileReader.DONE) {
              console.log('readLocalFile:', event, event.result);
              result = reader.result;
            }

            _cb && _cb(result);
          };

          if (_readfileType == ReadFileType.DATA_URL) {
            reader.readAsDataURL(_file);
          } else if (_readfileType == ReadFileType.TEXT) {
            reader.readAsText(_file);
          } else if (_readfileType == ReadFileType.BINARY) {
            reader.readAsBinaryString(_file);
          } else if (_readfileType == ReadFileType.ARRAYBUFFER) {
            reader.readAsArrayBuffer(_file);
          }
        }

        saveData(content, fileNmae) {
          if (!cc.sys.isBrowser) {
            return;
          }

          var textFileAsBlob = new Blob([content], {
            type: 'application/json'
          });
          var downloadLink = document.createElement("a");
          downloadLink.download = fileNmae;
          downloadLink.innerHTML = "Download File";

          if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
          } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
          }

          downloadLink.click();
        }

      });

      FileTools._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8c5c960682c17f2421ea1957354812f1dd3f336.js.map