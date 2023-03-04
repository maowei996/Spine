System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, find, Vec3, Camera, UITransform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Drag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      find = _cc.find;
      Vec3 = _cc.Vec3;
      Camera = _cc.Camera;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1deehH4W1JQJWFbWpuKrnz", "Drag", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'find', 'EventTouch', 'Vec2', 'Vec3', 'Camera', 'UITransform', 'Slider', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Drag", Drag = (_dec = ccclass('Drag'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Camera), _dec(_class = (_class2 = class Drag extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "box", _descriptor, this);

          _initializerDefineProperty(this, "distanceLabel", _descriptor2, this);

          _initializerDefineProperty(this, "Camera3D", _descriptor3, this);

          this._distance = 0;
        }

        start() {
          var canvas = find('Canvas');
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this._distance = 0.5;
        }

        onTouchStart(evt) {//this.moveBox(evt.getLocation());
        }

        onTouchMove(evt) {
          this.moveBox(evt.getLocation());
        }

        moveBox(touchPos) {
          var pos = this.Camera3D.screenToWorld(new Vec3(touchPos.x, touchPos.y, this._distance));
          this.node.position = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
        }

        onDistanceChanged(slider) {
          this._distance = parseFloat(slider.progress.toFixed(2));
          this.distanceLabel.string = 'distance : ' + this._distance;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "box", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distanceLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Camera3D", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=644290b01812dab0764c1e7be0edf31060de0a06.js.map