import { Texture2D,ImageAsset,SpriteFrame } from 'cc';
import FileTools from './FileTools';

let mime = {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp'};




let createObjectURL = function(blob : Blob){
  if(window.URL != undefined)
    return window['URL']['createObjectURL'](blob);
  else
    return window['webkitURL']['createObjectURL'](blob);
}


let SelectFile = function ( file : any) :string {
  if(!file){
    console.log('SelectFile error!');
    return;
  }

  let fileType = file.type;
  if(!fileType) {
    fileType = mime[file.name.match(/\.([^\.]+)$/i)[1]];
  }

  var url  = createObjectURL(file);

  return url;
}



///html 接口


export class Html5 {


  public static HtmlFileInput( _cb : Function) : void {

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

    inputel.setAttribute('accept', '*');
    inputel.onchange = function(event: any) {

      let files = inputel.files;
      if(files && files.length > 0) {

        let filedata = files[0];
        _cb && _cb(filedata);
      }

    }


    inputel.click();
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

      console.log('width:',this.width);
      console.log('width:',this.height);

      //console.log(image);

      let strurl = image.currentSrc


      //let img = new Image();
      //img.src = strurl

      let imas = new ImageAsset(image);
      //imas._nativeAsset = image;


      let texture = new Texture2D();
      texture.image = imas;
      console.log(texture);
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



  static readLocalFile ( cbComplect:Function , readType:number = 1):void {

    Html5.HtmlFileInput(function( file : any ){
      FileTools.getInstance().readLocalFile(file,readType,function( data : any ){

        let url = SelectFile(file);

        cbComplect && cbComplect(file.name, data,url);

      });
    });
  }


  static readTexture2d ( cbComplect:Function ):void {

    Html5.HtmlFileInput(function( file : any ){
      Html5.LoadImage(file,null, function( url: string, texture: Texture2D ){
        cbComplect && cbComplect(file.name,url, texture);
      });
    });
  }

}