import { _decorator, Component, Node } from 'cc';
import { SkeletManager } from '../Data/SkeletManager';
import { OptionScrollview } from './OptionScrollview';
import {EventType, EventData} from '../Define';
import EventManager from '../EventManager';
const { ccclass, property } = _decorator;


enum MenuType {
  FILE,
  SKEL,
  ANIMATION,
  SKIN,
  EVENT,

  MAX = 0XFF,
}

@ccclass('Menu')
export class Menu extends Component {

  @property(Node)
  fileOperPanel: Node = null;

  @property(Node)
  animationPanel: Node = null;

  @property(Node)
  skinPanel: Node = null;

  @property(Node)
  skeletonPanel: Node = null;

  @property(Node)
  eventPanel: Node = null;


  _loop: Boolean = true;



  start() {

  }



  private updateOperPanle( operType: MenuType, visible: boolean ): void {
    this.fileOperPanel.active = (operType == MenuType.FILE) ? visible: false;
    this.animationPanel.active = (operType == MenuType.ANIMATION)? visible: false;
    this.skinPanel.active = (operType == MenuType.SKIN)? visible: false;
    this.skeletonPanel.active = (operType == MenuType.SKEL)? visible: false;
    this.eventPanel.active = (operType == MenuType.EVENT)? visible: false;
  }


  onFileMenu () {

    let active = this.fileOperPanel.active;
    this.fileOperPanel.active = !active;
    this.updateOperPanle(MenuType.FILE, !active);
  }


  onSkeleron () {
    let active = this.skeletonPanel.active;
    this.skeletonPanel.active = !active;
    this.updateOperPanle(MenuType.SKEL, !active);

    if(!active){

      let skeletons = SkeletManager.getInstance().skeletons;
      if(!skeletons){
        return console.log('[Menu]:not SpineData!!');
      }

      let array = [];

      for (const v of skeletons) {
        if(v.key){
          array.push(v.key);
        }
      }

      if (array.length < 1 ) {
        array.push('没有Spine!');
        array.push('嘻嘻');
      } 

      let option = this.skeletonPanel.getComponent(OptionScrollview);
      option.setData(1,array);
    }
  }

  onAnimation() {
    let active = this.animationPanel.active;
    this.animationPanel.active = !active;
    this.updateOperPanle(MenuType.ANIMATION, !active);

    if(!active){

      let skelet = SkeletManager.getInstance().skelet;
      if(!skelet){
        return console.log('[Menu]:not SpineData!!');
      }

      let array = skelet.animations || [];
      if (array.length < 1 ) {
        array.push('没有时间线!');
        array.push('嘻嘻');
      }

      let option = this.animationPanel.getComponent(OptionScrollview);
      option.setData(2,array);
    }
  }

  onSkin(){
    let active = this.skinPanel.active;
    this.skinPanel.active = !active;

    this.updateOperPanle(MenuType.SKIN, !active);
    if(!active){

      let skelet = SkeletManager.getInstance().skelet;
      if(!skelet){
        return console.log('[Menu]:not SpineData!!');
      }
      let array = skelet.skins || [];

      if(array.length < 1){
        array.push('没有皮肤!');
        array.push('哈哈');
      }

      let option = this.skinPanel.getComponent(OptionScrollview);
      option.setData(3,array);
    }
  }

  onEvent(){
    let active = this.eventPanel.active;
    this.eventPanel.active = !active;

    this.updateOperPanle(MenuType.EVENT, !active);
    if(!active){

      let array = [];
      let skelet = SkeletManager.getInstance().skelet;
      if(!skelet){
        // return console.log('[Menu]:not SpineData!!');
      } else {
        array = skelet.events;
      }

      if(array.length < 1){
        array.push('没有事件!');
        array.push('哈哈');
      }

      let option = this.eventPanel.getComponent(OptionScrollview);
      option.setData(4,array);
    }
  }

  onToggleDebug() {
    this.updateOperPanle(MenuType.MAX, false);
  }

  onToggleLoop() {
    this._loop = !this._loop;

    let param: EventData = new EventData();
    param.eventType = EventType.CHANGE_SPINE_LOOP;;
    param.param = this._loop;

    EventManager.getInstance().emit('machine', param);

  }


  inputEvent( data: any) {
    let number =  Number(data.string);
    console.log('========输入完成!',number);

    let param: EventData = new EventData();
    param.eventType = EventType.UPDATE_SCALE;;
    param.param = number;

    EventManager.getInstance().emit('machine', param);
  }
}

