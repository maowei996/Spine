
export default class SingletonMgr {
  static getInstance<T extends {}>(this: new () => T): T {
    if (!(<any>this).__instance){
      (<any>this).__instance = new this();
    }
    return (<any>this).__instance;
  }

  public static destroy<T extends {}>(this: new () => T): void {
    if ((<any>this).__instance){
      (<any>this).__instance = null;
    }
  }
}