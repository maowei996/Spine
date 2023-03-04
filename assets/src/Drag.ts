import { _decorator, Component, Node, find, EventTouch, Vec2, Vec3, Camera, UITransform } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Drag')
export class Drag extends Component {

  @property(Camera)
  Camera3D !: Camera;

  _distance = 0;

  start () {
    var canvas = find('Canvas')!;
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this._distance = 0.5;
  }

  onTouchStart(evt: EventTouch) {
    //this.moveBox(evt.getLocation());
  }

  onTouchMove(evt: EventTouch) {
    this.moveBox(evt.getLocation());
  }

  moveBox (touchPos: Vec2) {
    let pos = this.Camera3D.screenToWorld(new Vec3(touchPos.x, touchPos.y, this._distance));
    this.node.position = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(pos);
  }
}