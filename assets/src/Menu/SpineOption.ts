import { _decorator, Component, Node } from 'cc';
import { SkeletManager } from '../Data/SkeletManager';
import { OptionScrollview } from './OptionScrollview';
import { Spine } from '../Spine/Spine';
import { SpineData } from '../Data/SpineData';
const { ccclass, property } = _decorator;


enum OptionType {
  FILE,
  SKEL,
  ANIMATION,
  SKIN,
  EVENT,
  MAX = 0XFF,
}


@ccclass('SpineOption')
export class SpineOption extends Component {
  @property(Node)
  animationPanel: Node = null;
  
  @property(Node)
  skinPanel: Node = null;

  @property(Node)
  eventPanel: Node = null;

  _loop: boolean = true;

  _spineControl: Spine = null;

  _spinData: SpineData = null;


  public setSpineControl(_control: Spine, _spdata: SpineData):void {
    this._spineControl = _control;
    this._spinData = _spdata;
  }


  private updateOperPanle( operType: OptionType, visible: boolean ): void {
    this.animationPanel.active = (operType == OptionType.ANIMATION)? visible: false;
    this.skinPanel.active = (operType == OptionType.SKIN)? visible: false;
    this.eventPanel.active = (operType == OptionType.EVENT)? visible: false;
  }


  onAnimation() {
    let active = this.animationPanel.active;
    this.animationPanel.active = !active;
    this.updateOperPanle(OptionType.ANIMATION, !active);

    if(!active){

      if(!this._spinData){
        return console.log('[SpineOption]:not SpineData!!');
      }

      let array = this._spinData.animations || [];
      if (array.length < 1 ) {
        array.push('没有时间线!');
      }

      let option = this.animationPanel.getComponent(OptionScrollview);
      option.setData(2,array);

      option.setOptionCallBack((animation: string)=>{
        this.setAnimation(animation);
      })
    }
  }

  onSkin(){
    let active = this.skinPanel.active;
    this.skinPanel.active = !active;

    this.updateOperPanle(OptionType.SKIN, !active);
    if(!active){

      if(!this._spinData){
        return console.log('[SpineOption]:not SpineData!!');
      }
      let array = this._spinData.skins || [];

      if(array.length < 1){
        array.push('没有皮肤!');
      }

      let option = this.skinPanel.getComponent(OptionScrollview);
      option.setData(3,array);
      option.setOptionCallBack((skin: string)=>{
        this.setSkin(skin);
      })
    }
  }

  onEvent(){
    let active = this.eventPanel.active;
    this.eventPanel.active = !active;

    this.updateOperPanle(OptionType.EVENT, !active);
    if(!active){

      let array = [];
      if(!this._spinData){
        // return console.log('[Menu]:not SpineData!!');
      } else {
        array = this._spinData.events;
      }

      if(array.length < 1){
        array.push('没有帧事件!');
      }

      let option = this.eventPanel.getComponent(OptionScrollview);
      option.setData(4,array);
      option.setOptionCallBack((event: string)=>{
      })
    }
  }

  setAnimation(animation: string){

    this._spineControl.setAnimation(animation);
  }

  setSkin(skin: string){

    this._spineControl.setSkine(skin);
  }

  onCloseView(){
    this.node.active = false;
  }

  onToggleDebug() {
    this.updateOperPanle(OptionType.MAX, false);
  }

  onToggleLoop() {
    this._loop = !this._loop;

    this._spineControl.setLoop(this._loop);
  }


  inputEvent( data: any) {
    let number =  Number(data.string);
    console.log('========输入完成!',number);

    this._spineControl.setScale(number);
  }
}

