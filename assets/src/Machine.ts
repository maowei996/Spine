import { _decorator, Component, Node,Sprite,assetManager,Texture2D,SpriteFrame,ImageAsset,sp,Label,Prefab, instantiate,math, Vec3 } from 'cc';
import EventManager from './EventManager';
import {EventType, EventData} from './Define'
import { SkeletManager } from './Data/SkeletManager';
import { Html5 } from './Tool/Html5';
import { Spine } from './Spine/Spine';


const { ccclass, property } = _decorator;

@ccclass('Machine')
export class Machine extends Component {

  @property(Prefab)
  SpinePrefab: Prefab = null;

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

  @property(Label)
  timeScale: Label = null;

  @property(Label)
  spineName: Label = null;

  @property(Label)
  pngsz: Label = null;
  @property(Label)
  atlassz: Label = null;
  @property(Label)
  jsonsz: Label = null;
  @property(Label)
  skelsz: Label = null;

  //缓存对象
  private _mapSpine: Map<string,Node> = new Map<string,Node>;

  spineJson :any = null;
  spineAtlas : any = null;
  spineTexture: any = null;



  start() {
    EventManager.getInstance().on('machine', this.onEvent, this);
    Html5.createElementDiv( (file :FileList) => {
      SkeletManager.getInstance().parse(file);
    });
  }


  onEvent (data: EventData) {
    console.log('[Machine]收到了事件消息_type:',data.eventType)

    let _eventType = data.eventType;
    let skeleton = this.skeleton;

    if(_eventType == EventType.REFRESH_SKELETON) {
      //菜单创建
      skeleton.skeletonData = data.param.skeletonData;
      skeleton.animation = data.param.defanimation;
      if(data.param.bBinary){
        data.param.parse(data.param.skeletonData._skeletonCache);
        skeleton.animation = data.param.defanimation;
      }
      this.updateUI();
      console.log('onEvent.skeleton:',skeleton);
    }
    else if(_eventType == EventType.CHANGE_SPINE){
      //切换角色
      console.log('切换角色');
      let spineKey = data.param;
      let spineDate = SkeletManager.getInstance().get(spineKey);

      if(this._mapSpine.has(spineKey)){
        let spine = this._mapSpine.get(spineKey);
        spine.active = !spine.active

        let component = spine.getComponent(Spine);

        SkeletManager.getInstance().skelet = spineDate;

        this.skeleton = component.getSkeleton();
        this.updateUI();
      }
      // if(spineDate){
      //   skeleton.skeletonData = spineDate.skeletonData;
      //   skeleton.animation = spineDate.defanimation;
      //   SkeletManager.getInstance().skelet = spineDate;
      //   this.updateUI();
      // }
    }
    else if(_eventType == EventType.CHANGE_SPINE_ANIMATION){
      skeleton.animation = data.param;
    }
    else if(_eventType == EventType.UPDATE_SPINE_SKIN){

      skeleton.setSkin(data.param);
    }
    else if(_eventType == EventType.OPENOROFF_DEBUG){
      let skeleton = this.skeleton;
      if(skeleton) {
        skeleton.debugBones = true;
        skeleton.debugSlots = true;
        skeleton.debugMesh = true;
      }
    }
    else if(_eventType == EventType.CHANGE_SPINE_LOOP){
      skeleton.loop = data.param;
    }
    else if(_eventType == EventType.UPDATE_SCALE){
      skeleton.node.setScale(data.param,data.param,1);
    }

    else if(_eventType == EventType.CREATE_SPINE){

      let spinData = data.param;

      if(this._mapSpine.has(spinData.key)){
        return;
      }

      let spine = instantiate(this.SpinePrefab);
      this.node.addChild(spine);
      spine.position = new Vec3(0,0,1);

      this._mapSpine.set(spinData.key, spine);

      let component = spine.getComponent(Spine);
      component.setSpineData(spinData);

      this.skeleton = component.getSkeleton();

      this.updateUI();
    }
    else if(_eventType == EventType.CHANGE_CONTROL) {
      console.log('更新当前操作Spine');
      let spinData = data.param;

      if(!this._mapSpine.has(spinData.key)){
        return;
      }
      let spine = this._mapSpine.get(spinData.key);
      SkeletManager.getInstance().skelet = spinData;

      this.skeleton = spine.getComponent(Spine).getSkeleton();
      this.updateUI();
    }
  }


  updateUI() {
    let skelet = SkeletManager.getInstance().skelet;
    this.fpsLaebl.string = 'fps:'+ ((skelet.fps == 0) ? 30:skelet.fps).toString();
    this.szLaebl.string = 'width:'+ Math.ceil(skelet.width) + " " + 'height:' + Math.ceil(skelet.height);
    this.versionLaebl.string = 'version:'+skelet.version;
    this.bonesLaebl.string = 'bones:'+skelet.bones;
    this.slotsLaebl.string = 'slots:'+skelet.slots;
    this.timeScale.string = 'timeScale:' + this.skeleton.timeScale;
    this.spineName.string = 'name:'+skelet.key;

    this.pngsz.string = 'png:'+skelet.pngsz;
    this.atlassz.string = 'atla:'+skelet.atlassz;
    this.jsonsz.string = 'json:'+skelet.jsonsz;
    this.skelsz.string = 'skel:'+skelet.skelsz;
  }

  onDisable () {
    EventManager.getInstance().off('machine',this.onEvent,this);
  }
}