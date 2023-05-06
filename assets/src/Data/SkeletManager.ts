import { SpineData } from "./SpineData";
import { Html5 } from "../Tool/Html5";
import {EventType, EventData} from '../Define';
import FileTools from "../Tool/FileTools";
import EventManager from '../EventManager';

import { BlockInputEvents, Texture2D,sp } from 'cc';


interface ISPNode {
  url: string | null;
  key: string | null;
  pngName:string | null;
  nativeUrl: string,
  binary: boolean;
  bjson: boolean;
}



export class SkeletManager {

  private static _instance = null;

  private _skeletons: Array<SpineData> = [];

  private _map: Map<string,SpineData> = new Map<string,SpineData>;

  private _curskeleton: SpineData = null;

  private _IspNode : ISPNode = null;

  
  public static getInstance():SkeletManager {

    if(!SkeletManager._instance){
      SkeletManager._instance = new SkeletManager();
    }

    return SkeletManager._instance;
  }



  public add(data: SpineData) {

    if(this._map.has(data.key)){
      return;
    }

    this._map.set(data.key, data);

    this._skeletons.push(data);

    this.skelet = data;
  }
  

  public get skeletons():Array<SpineData> {
    return this._skeletons;
  }


  public get(key: string):SpineData {
    // return this._map![key];
    return this._map.get(key);
  }

  public isHas(key: string) {
    if(this._map.has(key)) {
      return true;
    }
    return false;
  }

  public find(spineKey: string):SpineData {

    let data: SpineData = null;
    for (const v of this._skeletons) {
      if(v.key == spineKey){
        data = v;
        break;
      }
    }

    return data;
  }


  public set skelet(v: any) {
    this._curskeleton = v;
  }

  public get skelet():SpineData  {
    return this._curskeleton;
  }

  get count(): number {
    return this._map.size;
  }

  public destroy() {
    this._map = null;
  }

  public parse( files: FileList ) :void {

    let resKey = {
      'json': 1,
      'atlas': 1,
      'png': 1,
      'skel': 3
    };

    let totalCount = files.length;
    let load = {}
    let arrayBuffer = {}
    let fileBuffer = {}

    for (let index = 0; index < files.length; index++) {
      const element = files[index];

      // if(element.name.indexOf() ){
      // }

      let type = element.name.split('.')[1];

      if(resKey[type]){
        load[type] = true
        arrayBuffer[type] = {file:files[index], readType : resKey[type]};

        let key = element.name;

        fileBuffer[key] = {file:files[index], readType : resKey[type], fileType:type};
      }
    }

    this._IspNode = {url:'',key:'',pngName:'',nativeUrl:'',binary:false,bjson:false};

    if(load['png'] && load['atlas'] ) {
      this._IspNode.bjson = load['json'];
      this._IspNode.binary = load['skel'];
    }

    if(!this._IspNode.bjson && !this._IspNode.binary){
      alert('解析错误,格式不正确!')
      return;
    }


    let key = '';

    if(arrayBuffer['json']) {
      key = arrayBuffer['json'].file.name.split('.')[0]
    }else {
      key = arrayBuffer['skel'].file.name.split('.')[0]
    }
    
    if(this.isHas(key)){
      alert('已经加载过这个Spine动画!')
      return;
    }

    let loadCount = 0
    let loadBuffer = {}
    loadBuffer['png'] = [];

    let onComplect = (_name: string,_data: any, _key: string, _nativeUrl:string = '')=>{
      //if(!loadBuffer[_key]){
      //  loadBuffer[_key] = { size: (fileBuffer[_key].file.size / 1024) | 1, data: _data, name: _name ,nativeUrl:_nativeUrl}
      //}

      let data = { size: (fileBuffer[_key].file.size / 1024) | 1, data: _data, name: _name ,nativeUrl:_nativeUrl}
      let type = _key.split('.')[1];
      if(type === 'png') {
        loadBuffer[type].push(data)
      }
      else {
        loadBuffer[type] = data
      }

      loadCount++;
      if(loadCount == totalCount){
        this.loadSpine(loadBuffer);
      }
    }

    //循环读取
    for (const key in fileBuffer) {

      let info = fileBuffer[key];

      if(info.fileType  != 'png' ) {
        FileTools.getInstance().readLocalFile(info.file,info.readType,(data: any)=>{
          onComplect(info.file.name,data,key,Html5.getFileUrl(info.file));
        })
      } else{
        Html5.LoadImage(info.file,null, (url: string, texture: Texture2D)=>{
          onComplect(info.file.name,texture,key,url);
        });
      }
    }
  }

  private loadSpine(loadBuffer: any):void {
    console.log('数据读取完成')
    console.log(loadBuffer);

    let pngsz = 0;
    let textures = [];
    let texNames = [];
    for (const iterator of loadBuffer['png']) {
      textures.push(iterator.data)
      texNames.push(iterator.name)

      pngsz += iterator.size
    }

    let asset = new sp.SkeletonData();
    asset.atlasText = loadBuffer['atlas'].data;
    asset.textures = textures;
    asset.textureNames = texNames;
    
    if(this._IspNode.bjson) {
      asset.skeletonJson = loadBuffer['json'].data;
    } 
    else{
      asset._nativeAsset = loadBuffer['skel'].data;
      asset._uuid = texNames[0] + 'skel_spine';
      asset._nativeUrl = loadBuffer['skel'].nativeUrl;
    }

    let data = new SpineData();
    data.bJson = this._IspNode.bjson;
    data.bBinary = this._IspNode.binary;
    data.name = texNames[0];
    data.url = textures[0].nativeUrl;
    // data.key = loadBuffer['atlas'].name.split('.')[0];
    data._textureData = textures[0].data;
    data._atlasData = loadBuffer['atlas'].data;
    data._jsonData = loadBuffer['json']?.data;
    data._skeletData = loadBuffer['skel']?.data;

    let key = '';
    if (loadBuffer['skel']) {
      key = loadBuffer['skel'].name.split('.')[0];
    }
    else
    {
      key = loadBuffer['json'].name.split('.')[0];
    }

    data.key = key;

    data.pngsz = pngsz + 'kb';
    data.atlassz = loadBuffer['atlas'].size + 'kb';
    data.jsonsz = loadBuffer['atlas']?.size + 'kb';
    data.skelsz = loadBuffer['skel']?.size + 'kb';

    data.skeletonData = asset;

    data.parseto();

    console.log(data)

    this.add(data);

    let param: EventData = new EventData();
    param.eventType = EventType.CREATE_SPINE;
    param.param = data;


    EventManager.getInstance().emit('machine', param);
  }

  private loadSpine_older(loadBuffer: any):void {
    console.log('数据读取完成')
    console.log(loadBuffer);

    let asset = new sp.SkeletonData();
    asset.atlasText = loadBuffer['atlas'].data;
    asset.textures = [loadBuffer['png'].data];
    asset.textureNames = [loadBuffer['png'].name];
    
    if(this._IspNode.bjson) {
      asset.skeletonJson = loadBuffer['json'].data;
    } 
    else{
      asset._nativeAsset = loadBuffer['skel'].data;
      asset._uuid = loadBuffer['png'].name + 'skel_spine';
      asset._nativeUrl = loadBuffer['skel'].nativeUrl;
    }

    let data = new SpineData();
    data.bJson = this._IspNode.bjson;
    data.bBinary = this._IspNode.binary;
    data.name = loadBuffer['png'].name;
    data.url = loadBuffer['png'].nativeUrl;
    // data.key = loadBuffer['atlas'].name.split('.')[0];
    data._textureData = loadBuffer['png'].data;
    data._atlasData = loadBuffer['atlas'].data;
    data._jsonData = loadBuffer['json']?.data;
    data._skeletData = loadBuffer['skel']?.data;

    let key = '';
    if (loadBuffer['skel']) {
      key = loadBuffer['skel'].name.split('.')[0];
    }
    else
    {
      key = loadBuffer['json'].name.split('.')[0];
    }

    data.key = key;

    data.pngsz = loadBuffer['png'].size + 'kb';
    data.atlassz = loadBuffer['atlas'].size + 'kb';
    data.jsonsz = loadBuffer['atlas']?.size + 'kb';
    data.skelsz = loadBuffer['skel']?.size + 'kb';

    data.skeletonData = asset;

    data.parseto();

    console.log(data)

    this.add(data);

    let param: EventData = new EventData();
    param.eventType = EventType.CREATE_SPINE;
    param.param = data;


    EventManager.getInstance().emit('machine', param);
  }

}