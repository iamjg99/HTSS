const {app, BrowserWindow} = require('electron')
const url = require('url') 
const path = require('path')  


let splash

function createWindow() { 
   
mainWindow = new BrowserWindow({
   width: 1200,
   height: 1000,
   show: false
});

   splash = new BrowserWindow({width: 800, height: 600, frame: false}) 
   splash.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'splash.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
   mainWindow.loadURL('file://__dirname/Editor.html');
   mainWindow.once('ready-to-show', () =>{
      splash.destroy(5*1000);
      mainWindow.show();
   });   
}  

app.on('ready', createWindow) 