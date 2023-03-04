

import { _decorator, Component, Node,Sprite,assetManager,Texture2D,SpriteFrame,ImageAsset,sp,Label, math } from 'cc';
import EventManager from './EventManager';
import {EventType, EventData} from './Define'
import { SkeletManager } from './Data/SkeletManager';


const { ccclass, property } = _decorator;

@ccclass('Machine')
export class Machine extends Component {

  @property(Sprite)
  sp: Sprite = null!;

  @property(sp.Skeleton)
  skeleton: sp.Skeleton = null!;

  @property(Label)
  fpsLaebl: Label = null;

  @property(Label)
  szLaebl: Label = null;
  
  @property(Label)
  versionLaebl: Label = null;

  @property(Label)
  bonesLaebl: Label = null;
  
  @property(Label)
  slotsLaebl: Label = null;


  spineJson :any = null;
  spineAtlas : any = null;
  spineTexture: any = null;


  start() {

    EventManager.getInstance().on('machine', this.onEvent, this);
    
  }


  onEvent (data: EventData) {
    console.log('[Machine]收到了事件消息_type:',data.eventType)

    let _eventType = data.eventType;
    let skeleton = this.skeleton;

    if(_eventType == EventType.REFRESH_SKELETON) {
      skeleton.skeletonData = data.param.skeletonData;
      skeleton.animation = data.param.defanimation;

      if(data.param.bBinary){

        data.param.parse(data.param.skeletonData._skeletonCache);

        skeleton.animation = data.param.defanimation;
      }

      this.updateUI();

      // console.log('onEvent.skeleton:',skeleton);
    }
    else if(_eventType == EventType.CHANGE_SPINE){
      //切换角色
      console.log('切换角色');
      let spineKey = data.param;
      let spineDate = SkeletManager.getInstance().get(spineKey);
      if(spineDate){
        skeleton.skeletonData = spineDate.skeletonData;
        skeleton.animation = spineDate.defanimation;

        SkeletManager.getInstance().skelet = spineDate;

        this.updateUI();
      }
    }
    else if(_eventType == EventType.CHANGE_SPINE_ANIMATION){
      skeleton.animation = data.param;
    }
    else if(_eventType == EventType.UPDATE_SPINE_SKIN){

      skeleton.setSkin(data.param);
    }
    else if(_eventType == EventType.OPENOROFF_DEBUG){

    }
    else if(_eventType == EventType.CHANGE_SPINE_LOOP){
      skeleton.loop = data.param;
    }
    else if(_eventType == EventType.UPDATE_SCALE){
      skeleton.node.setScale(data.param,data.param,1);// = data.param;
    }

  }

  updateUI() {
    let skelet = SkeletManager.getInstance().skelet;
    this.fpsLaebl.string = 'fps:'+ ((skelet.fps == 0) ? 30:skelet.fps).toString();
    this.szLaebl.string = 'width:'+ Math.ceil(skelet.width) + " " + 'height:' + Math.ceil(skelet.height);
    this.versionLaebl.string = 'version:'+skelet.version;
    this.bonesLaebl.string = 'bones:'+skelet.bones;
    this.slotsLaebl.string = 'slots:'+skelet.slots;
  }



  onDisable () {
    EventManager.getInstance().off('machine',this.onEvent,this);
  }

}