System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec2, _dec, _class, _crd, ccclass, property, Drag;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1deehH4W1JQJWFbWpuKrnz", "Drag", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Drag", Drag = (_dec = ccclass('Drag'), _dec(_class = class Drag extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchStartCallback, this, true);
        }

        onTouchStartCallback(event) {
          // let delta = event.getLocation();
          // this.node.x += delta.x;
          // this.node.y += delta.y;
          //let location = event.getLocation();
          //this.node.position = location; //this.node.convertToNodeSpaceAR(location);
          let location = event.getUILocation();
          let pos = new Vec2(location.x, location.y); // this.node.x += pos.x;
          // this.node.y += pos.y;

          this.node.position = pos;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b16107beb2ccafbfa00ee8ef45cf65f4265b5b7d.js.map