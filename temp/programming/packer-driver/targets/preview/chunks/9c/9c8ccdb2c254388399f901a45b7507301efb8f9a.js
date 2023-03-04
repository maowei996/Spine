System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Html5, _crd;

  _export("Html5", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1c44NJG8BNAYuZrqD/fcjV", "Html5", undefined);

      ///html 接口
      _export("Html5", Html5 = class Html5 {
        static HtmlFileInput(_cb) {
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

          inputel.setAttribute('accept', '*');

          inputel.onchange = function (event) {
            var files = inputel.files;

            if (files && files.length > 0) {
              var filedata = files[0];
              _cb && _cb(filedata);
            }
          };

          inputel.click();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c8ccdb2c254388399f901a45b7507301efb8f9a.js.map