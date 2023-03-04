System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Texture2D, ImageAsset, FileTools, Html5, _crd, mime, createObjectURL, SelectFile;

  function _reportPossibleCrUseOfFileTools(extras) {
    _reporterNs.report("FileTools", "./FileTools", _context.meta, extras);
  }

  _export("Html5", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Texture2D = _cc.Texture2D;
      ImageAsset = _cc.ImageAsset;
    }, function (_unresolved_2) {
      FileTools = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1c44NJG8BNAYuZrqD/fcjV", "Html5", undefined);

      __checkObsolete__(['Texture2D', 'ImageAsset', 'SpriteFrame']);

      mime = {
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'bmp': 'image/bmp'
      };

      createObjectURL = function createObjectURL(blob) {
        if (window.URL != undefined) return window['URL']['createObjectURL'](blob);else return window['webkitURL']['createObjectURL'](blob);
      };

      SelectFile = function SelectFile(file) {
        if (!file) {
          console.log('SelectFile error!');
          return;
        }

        var fileType = file.type;

        if (!fileType) {
          fileType = mime[file.name.match(/\.([^\.]+)$/i)[1]];
        }

        var url = createObjectURL(file);
        return url;
      }; ///html 接口


      _export("Html5", Html5 = class Html5 {
        static HtmlFileInput(_fileType, _cb) {
          var inputel = document.getElementById('file_input');

          if (!inputel) {
            inputel = document.createElement('input');
            inputel.id = 'file_input';
            inputel.setAttribute('id', 'file');
            inputel.setAttribute('type', 'file');
            inputel.setAttribute('class', 'fileToUpload');
            inputel.style.opacity = '0';
            inputel.style.position = 'absolute';
            inputel.setAttribute('left', '-999px');
            document.body.appendChild(inputel);
          }

          inputel.setAttribute('accept', _fileType || '*');

          inputel.onchange = function (event) {
            var files = inputel.files;

            if (files && files.length > 0) {
              var filedata = files[0];
              _cb && _cb(filedata);
            }

            inputel.remove();
          };

          inputel.onclick = function () {
            console.log('111');
          };

          inputel.oncanplay = function () {
            console.log('222');
          };

          inputel.click();
        } //


        static LoadImage(file, sp, _onComplete) {
          var url = SelectFile(file);
          var div = document.getElementById("divCreator");

          if (!div) {
            div = document.createElement("div");
            document.body.appendChild(div);
            div.style.position = "absolute";
            div.id = "divCreator"; //div.style.width = 100;
            //div.style.height = 100;

            div.style.backgroundColor = "#ffffcc";
          }

          div.innerHTML = '<img id=imghead>';
          var image = document.getElementById('imghead');
          image.src = url;

          image.onload = function () {
            console.log('=========LoadImage.image.onload');
            console.log('width:', this.width);
            console.log('width:', this.height); //console.log(image);

            var strurl = image.currentSrc; //let img = new Image();
            //img.src = strurl

            var imas = new ImageAsset(image); //imas._nativeAsset = image;

            var texture = new Texture2D();
            texture.image = imas;
            console.log(texture); // texture.initWithElement(image);
            // texture.handleLoadedTexture();
            // sp.spriteFrame = new SpriteFrame();
            // sp.spriteFrame.setTexture(texture)
            // sp.spriteFrame._texture = texture
            // sp.spriteFrame._texture = texture.getHtmlElementObj()
            // sp.spriteFrame.texture = texture
            // let frame = new SpriteFrame();
            // frame.texture = texture;
            // sp.spriteFrame = frame;
            // sp.width = this.width;
            // sp.height = this.height;

            _onComplete && _onComplete(strurl, texture);
          };

          div.style.display = 'none';
          div.style.visibility = "hidden";
        }

        static readLocalFile(fileType, readType, cbComplect) {
          if (readType === void 0) {
            readType = 1;
          }

          Html5.HtmlFileInput(fileType, function (file) {
            (_crd && FileTools === void 0 ? (_reportPossibleCrUseOfFileTools({
              error: Error()
            }), FileTools) : FileTools).getInstance().readLocalFile(file, readType, function (data) {
              var url = SelectFile(file);
              cbComplect && cbComplect(file.name, data, url);
            });
          });
        }

        static readTexture2d(fileType, cbComplect) {
          Html5.HtmlFileInput(fileType, function (file) {
            Html5.LoadImage(file, null, function (url, texture) {
              cbComplect && cbComplect(file.name, url, texture);
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e994cf774f9be70a5e238a1c89d108eb440141a9.js.map