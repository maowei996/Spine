import { SpineData } from "./SpineData";


export class SkeletManager {

  private static _instance = null;

  private _skeletons: Array<SpineData> = [];

  private _map: Map<string,SpineData> = new Map<string,SpineData>;

  private _curskeleton: SpineData = null;


  
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

}