System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, _dec, _class, _crd, ccclass, property, Drag;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1deehH4W1JQJWFbWpuKrnz", "Drag", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Drag", Drag = (_dec = ccclass('Drag'), _dec(_class = class Drag extends Component {
        start() {
          this.cameraUI = cc.find('Canvas/Camera');
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchStartCallback, this);
        }

        onTouchStartCallback(touch, event) {
          // let delta = event.getLocation();
          // this.node.x += delta.x;
          // this.node.y += delta.y;
          // this.node.position = pos;
          var touchWPos = touch.getUILocation();
          var location = touch.getLocation();
          var uipos = this.cameraUI.screenToWorld(new Vec3(location.x, location.y, 1));
          var myNodePos = this.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(touchWPos.x, touchWPos.y, 1)); //this.node.position = myNodePos;

          var pos = this.node.position;
          pos.x += myNodePos.x;
          pos.y += myNodePos.y;
          this.node.position = pos;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f79db515553155e951dcf51e1d1f2b2e928521c.js.map