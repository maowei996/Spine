System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Html5, _dec, _class, _crd, ccclass, property, Machine;

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
    }, function (_unresolved_2) {
      Html5 = _unresolved_2.Html5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3a9fybJtdLx4tCl3ZVxMrH", "Machine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Machine", Machine = (_dec = ccclass('Machine'), _dec(_class = class Machine extends Component {
        start() {}

        onTest() {
          console.log('==========点击测试按钮！！');
          (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
            error: Error()
          }), Html5) : Html5).HtmlFileInput(function (file) {
            console.log('===========选择文件成功-data:', file);
            (_crd && Html5 === void 0 ? (_reportPossibleCrUseOfHtml({
              error: Error()
            }), Html5) : Html5).LoadImage(file, null); //FileTools.getInstance().readLocalFile(file,1,function( data : any ){
            //  console.log('===========解析数据成功-data:',data);
            //});
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7da0ee17fae1035ffcb5c04a1748855e40130fbc.js.map