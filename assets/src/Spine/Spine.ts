import { _decorator, Component, Node,sp ,EventTouch, find, Vec3} from 'cc';
import { SpineData } from '../Data/SpineData';
import { SpineOption } from '../Menu/SpineOption';
import {EventType, EventData} from '../Define';
const { ccclass, property } = _decorator;
import EventManager from '../EventManager';


@ccclass('Spine')
export class Spine extends Component {
  
  @property(sp.Skeleton)
  skeleton: sp.Skeleton = null!;

  private _spinData: SpineData = null;
  private _optionPanle: Node = null;

  protected start(): void {

    let optionPanle = find('Root/OptionPanel',this.node);
    optionPanle.active = false;
    this._optionPanle = optionPanle;

    let component = this._optionPanle.getComponent(SpineOption);
    component.setSpineControl(this,this._spinData);
    
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

  public setSkine(skin: string) {
    this.skeleton.setSkin(skin);
  }

  public setAnimation(animation: string) {
    this.skeleton.animation = animation;
  }

  public setScale( scale: number) {
    this.node.setScale(new Vec3(scale,scale,1));
  }

  public setTimeScale() {
    
  }

  public setLoop( bloop: boolean) {
    this.skeleton.loop = bloop;
  }


  onOption(){
    this._optionPanle.active = !this._optionPanle.active;
  }
}

