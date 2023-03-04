


enum ReadFileType {
  DATA_URL,
  TEXT,
  BINARY,
  ARRAYBUFFER,
}


export default class FileTools {

  private static _instance = null;

  public static getInstance():FileTools {

    if(!FileTools._instance){
      FileTools._instance = new FileTools();
    }

    return FileTools._instance;
  }

  /**
   * 读取本地文件数据
   * 数据
   * @param {File} _file
   * @param {ReadFileType} _readfileType
   * @param {((result: string | ArrayBuffer) => void)} _cb
   */
  public readLocalFile(_file:File, _readfileType:ReadFileType, _cb:Function):void {

    if(!_file){
      console.log('readLocalFile_ file:null!!');
      return;
    }

    let reader = new FileReader();
    reader.onload = function (event: any) {
      if(event){
        //console.log('readLocalFile:',event,event.result);
      }

      let result = null;

      if(reader.readyState == FileReader.DONE){
        //console.log('readLocalFile:',event,event.result);
        result = reader.result;
      }

      _cb && _cb(result);
    }

    if(_readfileType == ReadFileType.DATA_URL) {
      reader.readAsDataURL(_file);
    }
    else if(_readfileType == ReadFileType.TEXT) {
      reader.readAsText(_file);
    }
    else if(_readfileType == ReadFileType.BINARY) {
      reader.readAsBinaryString(_file);
    }
    else if(_readfileType == ReadFileType.ARRAYBUFFER) {
      reader.readAsArrayBuffer(_file);
    }
  }


  public saveData(content: any, fileNmae: any):void {
    // if(!cc.sys.isBrowser){
    //   return;
    // }

    let textFileAsBlob = new Blob([content], {type:'application/json'});
    let downloadLink = document.createElement("a");
    downloadLink.download = fileNmae;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
  }
}