import SingletonMgr from "./SingletonMgr";
import { EventTarget } from 'cc';
 
export default class EventManager extends SingletonMgr {
  public event: EventTarget = null;
 
  constructor() {
    super();
    this.initialize();
  }
 
  private initialize(): void {
    this.event = new EventTarget();
  }

  public emit(key: string, data?: any) {
    this.event.emit(key, data)
  }
 
  public on(key: string, callback: any, target?: any) {
    this.event.on(key, callback, target);
  }
 
  public off(key: string, callback?: any, target?: any) {
    this.off(key, callback, target);
  }
}