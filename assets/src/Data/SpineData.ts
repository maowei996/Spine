import { Texture2D,sp } from 'cc';


export class SpineData {

  public bJson: boolean = false;
  
  public bBinary: boolean = false;

  public name: string = '';

  public key: string = '';

  public url: string = '';

  public version: string = '0.0.0';

  //默认播放的时间线
  public defanimation: string = '';

  public _jsonData : any = null;
  public _atlasData: string = null;
  public _skeletData: any = null;
  public _textureData : Texture2D = null;

  public width: number = 0;
  public height: number = 0;

  public fps: number = 0;

  public bones: number = 0;
  public slots: number = 0;
  public meshs: number = 0;

  //spine数据实例化对象
  public skeletonData: sp.SkeletonData = null;

  //帧事件
  public events: Array<string> = new Array();

  //皮肤
  public skins: Array<string> = new Array();

  //Animation
  public animations: Array<string> = [];


  public parse( _skeletonCashe: any ){

    this.width = _skeletonCashe.width;
    this.height = _skeletonCashe.height;
    this.version = _skeletonCashe.version;
    this.fps = _skeletonCashe.fps;

    let animations = _skeletonCashe.animations || [];
    let skins = _skeletonCashe.skins || [];
    let events = _skeletonCashe.events || [];

    this.bones = _skeletonCashe.bones?.length;
    this.slots = _skeletonCashe.slots?.length;

    for (const v of animations) {
      let name = v.name
      if(v.duration >= 0){
        name = name + '*' + ((v.duration > 0) ? v.duration: 0).toString();
      }
      this.animations.push(name);
    }

    if(skins instanceof Array){
      for (const iterator of skins) {
        this.skins.push(iterator.name);
      }
    } else{
      this.skins.push('default');
    }

    for (const iterator of events) {
      this.events.push(iterator.name || 'error');
    }

    this.defanimation = this.animations[0].split('*')[0];
  }

}