import { Texture2D,ImageAsset,SpriteFrame,sys } from 'cc';
import FileTools from './FileTools';

const mime = {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp'};


let createObjectURL = function(blob : Blob){
  if(window.URL != undefined)
    return window['URL']['createObjectURL'](blob);
  else
    return window['webkitURL']['createObjectURL'](blob);
}

function SelectFile( file : any) :string {
  if(!file){
    console.log('SelectFile error!');
    return;
  }

  let fileType = file.type;
  if(!fileType) {
    fileType = mime[file.name.match(/\.([^\.]+)$/i)[1]];
  }

  return createObjectURL(file);;
}



export class Html5 {


  public static HtmlFileInput(  _fileType:string, _cb : Function,) : void {

    let inputel : HTMLInputElement = <HTMLInputElement>document.getElementById('file_input');
    if(!inputel) {
      inputel = document.createElement('input');
      inputel.id = 'file_input';
      inputel.setAttribute('id', 'file');
      inputel.setAttribute('type', 'file');
      inputel.setAttribute('class', 'fileToUpload');
      inputel.style.opacity = '0';
      inputel.style.position = 'absolute';
      inputel.setAttribute('left', '-999px');
      document.body.appendChild(inputel);
    }

    inputel.setAttribute('accept', _fileType || '*');
    inputel.onchange = function(event: any) {

      let files = inputel.files;
      if(files && files.length > 0) {

        let filedata = files[0];
        _cb && _cb(filedata);
      }
      // inputel.remove();
    }

    inputel.onclick = function () {
      inputel.remove();
    }

    // inputel.oncancel = function () {
    //   inputel.remove();
    // }

    // inputel.onclose = function () {
    //   inputel.remove();
    // }

    // inputel.ondblclick = function () {
    //   inputel.remove();
    // }

    // inputel.onended = function () {
    //   inputel.remove();
    // }

    // inputel.onemptied = function () {
    //   inputel.remove();
    // }

    inputel.click();
  }


  public static createElementDiv(  cbComplect: any ): void {
    let div = document.createElement('div');
    var text = document.createTextNode('拖入Spine文件到此处{png,json,atlas/skel}');
    document.body.appendChild(div);

    document.body.appendChild(div);
    div.id = 'dragDiv';
    div.className = 'dragDivClass';
    div.style.width = '150px';
    div.style.height = '170px';
    div.style.border = '1px solid rgb(255, 0, 0)';
    div.appendChild(text);

    div.style.position = 'absolute';
    div.style.left='0px';
    div.style.top='380px';

    //添加事件
    div.addEventListener("dragover",function(e){
      e.preventDefault();
    })
    div.addEventListener("drop",function(e){
      e.preventDefault();

      var filelist=e.dataTransfer.files;

      if(filelist.length==0){
        return false;
      }

      // if( filelist.length<3) {
      //   alert("数量不符合,至少是3个文件{png,json,atlas/skel}!!!");
      //   return false;
      // }

      if(cbComplect){
        cbComplect(filelist);
      }
    })
  }

  /**
   * 设置系统剪贴板的内容
   * @param str 
   */
  public static setClipboardData(str: string): void {
    if (!str || str == '') return window.alert('文本无效');
    if (sys.platform == 'MOBILE_BROWSER' || sys.platform == 'DESKTOP_BROWSER'){
      if (!document.queryCommandSupported('copy')) {
        window.alert('浏览器不支持');
        return;
      }
      let textarea = document.createElement("textarea")
      textarea.value = str
      document.body.appendChild(textarea)
      textarea.select()
      textarea.setSelectionRange(0, str.length)
      let result = document.execCommand("copy")
      if(result){
        //window.alert('已成功复制到剪贴板！');
      }else{
        //window.alert('复制失败！');
      }    
      textarea.remove();
      return;
    }
    window.alert('暂不支持该平台复制');
  }


  //
  public static LoadImage(  file: any, sp:any, _onComplete:Function) : void {
    let url = SelectFile(file);
    let div : HTMLElement = document.getElementById("divCreator");
    if(!div){
      div = document.createElement("div");
      document.body.appendChild(div);
      div.style.position="absolute";
      div.id = "divCreator";
      //div.style.width = 100;
      //div.style.height = 100;
      div.style.backgroundColor="#ffffcc";
    }

    div.innerHTML = '<img id=imghead>'
    let image : any = document.getElementById('imghead');

    image.src = url;

    image.onload = function () {
      console.log('=========LoadImage.image.onload');

      //console.log('width:',this.width);
      //console.log('width:',this.height);

      //console.log(image);

      let strurl = image.currentSrc

      //let img = new Image();
      //img.src = strurl

      let imas = new ImageAsset(image);
      //imas._nativeAsset = image;


      let texture = new Texture2D();
      texture.image = imas;
      //console.log(texture);

      // texture.initWithElement(image);
      // texture.handleLoadedTexture();

      // sp.spriteFrame = new SpriteFrame();
      // sp.spriteFrame.setTexture(texture)
      // sp.spriteFrame._texture = texture
      // sp.spriteFrame._texture = texture.getHtmlElementObj()
      // sp.spriteFrame.texture = texture

      // let frame = new SpriteFrame();
      // frame.texture = texture;
      // sp.spriteFrame = frame;

      // sp.width = this.width;
      // sp.height = this.height;
      
      _onComplete && _onComplete(strurl,texture);

    }


    div.style.display='none';
    div.style.visibility = "hidden";
  }



  static readLocalFile (fileType:string, readType:number = 1,cbComplect:Function ):void {

    Html5.HtmlFileInput(fileType,function( file : any ){
      FileTools.getInstance().readLocalFile(file,readType,function( data : any ){

        let url = SelectFile(file);

        cbComplect && cbComplect(file.name, data,url);

      });
    });
  }


  static readTexture2d (fileType:string, cbComplect:Function ):void {

    Html5.HtmlFileInput(fileType,function( file : any ){
      Html5.LoadImage(file,null, function( url: string, texture: Texture2D ){
        cbComplect && cbComplect(file.name,url, texture);
      });
    });
  }

  static getFileUrl (file: any ): string {

    return SelectFile(file);
  }

}