import FileTools from '../Tool/FileTools';
import EventManager from '../EventManager';

import { Html5 } from '../Tool/Html5';
import { SpineData } from '../Data/SpineData';
import { SkeletManager } from '../Data/SkeletManager';
import {EventType, EventData} from '../Define';
import { _decorator, Component, Node, Texture2D,sp } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('FileOper')
export class FileOper extends Component {

  private _bComplete : boolean = false;
  private _bBinary :boolean = false;
  private _bJson:boolean = false;

  private _jsonData : any = null;
  private _atlasData: string = null;
  private _skeletData: any = null;
  private _textureData : Texture2D = null;

  private _pngName : string = 'defa'
  private _url: string = '';
  private _key: string = '';
  private _nativeUrl: string = '';


  private rest(): void {
    this._bComplete = false;
    this._bBinary = false;
    this._bJson = false;
    this._jsonData  = null;
    this._atlasData = null;
    this._skeletData = null;
    this._textureData = null
    this._pngName  = 'defa'
    this._url = '';
    this._key = '';
    this._nativeUrl = '';
    this.node.active = false;
  }


  private checkComplect() :void {

    if(this._atlasData && this._textureData){

      if(this._jsonData || this._skeletData) {

        console.log('[FileOper]:数据读取完成');

        this._bComplete = true;

        this._bJson = this._jsonData ? true:false;
        this._bBinary = this._skeletData ? true:false;
      }
    }

    if (this._bComplete) {

      this.addSkeletonData();

    }

  }


  private addSkeletonData (): void {

    let asset = new sp.SkeletonData();
    
    if (this._bJson){
      asset.skeletonJson = this._jsonData;
      asset.atlasText = this._atlasData;
      asset.textures = [this._textureData];
      asset.textureNames = [this._pngName];
    }
    else
    {
      asset._nativeAsset = this._skeletData;
      asset.atlasText = this._atlasData;
      asset.textures = [this._textureData];
      asset.textureNames = [this._pngName];
      asset._uuid = this._pngName + 'skel_spine';

      asset._nativeUrl = this._nativeUrl;
    }

    let data = new SpineData();
    data.bJson = this._bJson;
    data.bBinary = this._bBinary;
    data.name = this._pngName;
    data.url = this._url;
    data.key = this._key;
    data._jsonData = this._jsonData;
    data._atlasData = this._atlasData;
    data._skeletData = this._skeletData;
    data._textureData = this._textureData;
    data.skeletonData = asset;

    if(asset.skeletonJson && asset.skeletonJson.skeleton){
      data.width = asset.skeletonJson.skeleton.width;
      data.height = asset.skeletonJson.skeleton.height;
      data.version = asset.skeletonJson.skeleton.spine;
    }

    let _skeletonJson = asset.skeletonJson || new Object();
    let animations = _skeletonJson.animations || [];
    let skins = _skeletonJson.skins || [];
    let events = _skeletonJson.events || {};

    data.bones = _skeletonJson.bones?.length;
    data.slots = _skeletonJson.slots?.length;

    for (const key in animations) {
      data.animations.push(key);
    }

    if(skins instanceof Array){
      for (const iterator of skins) {
        data.skins.push(iterator.name);
      }
    } else{
      data.skins.push('default');
    }

    for (const iterator in events) {
      data.events.push(iterator);
    }

    data.defanimation = data.animations[0];

    SkeletManager.getInstance().add(data);

    let param: EventData = new EventData();
    param.eventType = EventType.REFRESH_SKELETON
    param.param = data;


    // console.log('SkeletonData:',data);

    EventManager.getInstance().emit('machine', param);
    
    this.rest();
  }




  onPng () {
    let self = this;
    Html5.readTexture2d('.png',function(name: string, url: string, texture: Texture2D ){
      self._textureData = texture;
      self._pngName = name;
      self._url = url;

      self.checkComplect();
    });
  }

  onJsonData () {

    let self = this;
    Html5.readLocalFile('.json',1,function( name: string, data : any ){
      self._jsonData = data
      self.checkComplect();
    });

  }

  onAtlasData() {
    let self = this;
    Html5.readLocalFile('.atlas',1,function( name: string, data : any ){
      self._atlasData = data
      self._key = name.split('.')[0];
      self.checkComplect();
    });
  }

  onSkelData () {

    let self = this;

    Html5.readLocalFile('.skel',3,function( name: string, data : any ,url: string){

      // console.log('name:',name);
      // console.log('url:',url)
      // console.log('skel:',data);

      self._nativeUrl = url;

      self._skeletData = data;
      self.checkComplect();
    });
  }
  
}