import { _decorator, Component, Node,Prefab,ScrollView, instantiate } from 'cc';
import { ItemOption } from './ItemOption';
import {EventType, EventData} from '../Define';
import EventManager from '../EventManager';
const { ccclass, property } = _decorator;
  
//界面类型
enum ViewType {
  none = 0,
  Spine_view = 1,
  Animation_view =2,
  Skin_viwe = 3,
  Event_view = 4,

  MAX = 255
}

@ccclass('OptionScrollview')
export class OptionScrollview extends Component {

  @property(Prefab)
  itemOption: Prefab = null;

  @property(Number)
  viewType: Number = 0;

  private _data: any = null;

  private _curChooseName: string = '';


  start() {
    // this.loadLisit([]);
    // this.skeletons([]);
  }

  public skeletons(data: any) {
    this._data = data;
    if(data && (data instanceof Array)) {
      this.loadLisit(data);
    }
  }


  public setData(viewtype:any, data:any) {

    this.viewType = viewtype;
    this._data = data;

    if(data && (data instanceof Array)) {
      this.loadLisit(data);
    }
  }

  public loadLisit( array: any ) {

    let content = this.getComponent(ScrollView).content;
    content.removeAllChildren();

    for(let i = 0; i < array.length; i++){

      let item = instantiate(this.itemOption);
      content.addChild(item);

      let option = item.getComponent(ItemOption);
      option.itemName = array[i];

      option.clickFunc = function(ani:string){

        if(this.viewType != ViewType.Event_view){
          this.choose(ani);
        }

      }.bind(this);

    }

  }

  private choose( animation: string ) {

    console.log('choose:',animation,this._curChooseName);
    if(this._curChooseName!=animation){

      this._curChooseName = animation;
      // console.log('选择item选项_name = ',animation);
      this.notify();
    }
  }

  private notify() {

    let eventType = 0;
    if(this.viewType == ViewType.Spine_view){
      eventType = EventType.CHANGE_SPINE;
    }
    else if(this.viewType == ViewType.Animation_view) {
      eventType = EventType.CHANGE_SPINE_ANIMATION;
    }
    else if(this.viewType == ViewType.Skin_viwe) {
      eventType = EventType.UPDATE_SPINE_SKIN;
    }

    let param: EventData = new EventData();
    param.eventType = eventType;
    param.param = this._curChooseName;

    EventManager.getInstance().emit('machine', param);
  }
}