import { _decorator, Component, Node,sp ,EventTouch} from 'cc';
import { SpineData } from '../Data/SpineData';
import {EventType, EventData} from '../Define';
const { ccclass, property } = _decorator;
import EventManager from '../EventManager';


@ccclass('Spine')
export class Spine extends Component {
  
  @property(sp.Skeleton)
  skeleton: sp.Skeleton = null!;

  private _spinData: SpineData = null;


  protected start(): void {
    
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
  }

  private onTouchStart(evt: EventTouch) {

    let param: EventData = new EventData();
    param.eventType = EventType.CHANGE_CONTROL;
    param.param = this._spinData;

    EventManager.getInstance().emit('machine', param);
  }
  
  public setSpineData(_spdata : SpineData):void {
    this._spinData = _spdata;
    this.skeleton.skeletonData = _spdata.skeletonData;
    this.skeleton.animation = _spdata.defanimation;
  }

  public getSkeleton(): sp.Skeleton {
    return this.skeleton;
  }

  public setSkine() {

  }

  public setAnimation() {
    
  }

  public setScale() {

  }

  public setTimeScale() {
    
  }

}

