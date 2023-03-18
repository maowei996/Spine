
//操作事件类型

export enum EventType {

  NONE = 0,

  //主页面刷新新的Spine数据
  REFRESH_SKELETON = 1,

  //切换Spine
  CHANGE_SPINE = 2,

  //设置Animation
  CHANGE_SPINE_ANIMATION = 3,

  //更新皮肤
  UPDATE_SPINE_SKIN = 4,

  //开启Debug模式
  OPENOROFF_DEBUG = 5,

  //设置循环模式
  CHANGE_SPINE_LOOP = 6,

  //设置缩放
  UPDATE_SCALE = 7,

  //创建Spine
  CREATE_SPINE = 8,

  //切换控制对象
  CHANGE_CONTROL = 9,
}


//界面类型
enum ViewType {
  none = 0,
  Spine_view = 1,
  Animation_view =2,
  Skin_viwe = 3,
}


export class EventData {

  public eventType: EventType = EventType.NONE;

  public param: any = null;
}