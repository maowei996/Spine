import { _decorator, Component, Node,Label } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('ItemOption')
export class ItemOption extends Component {

  @property(Label)
  public label: Label = null;

  private _itemName: string = '';

  private _cbClickfunc: Function;


  public set itemName(v : string) {
    this._itemName = v;

    this.updateLabel();
  }
  
  public get itemName() : string {
    return this._itemName;
  }

  public set clickFunc(v : Function) {
    this._cbClickfunc = v;

  }
  
  public get clickFunc() : Function {
    return this._cbClickfunc;
  }


  private updateLabel() {

    this.label.string = this._itemName;

  }

  public onclick() {

    let name = this.itemName.split('*')[0];
    this._cbClickfunc && this._cbClickfunc(name);

  }
}