const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')


let splash

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        show: false,
        titleBarStyle: false,
    });

    splash = new BrowserWindow({ width: 800, height: 600, frame: false })
    splash.loadURL(url.format({
        pathname: path.join(__dirname, 'splash.html'),
        protocol: 'file:',
        slashes: true
    }))
    mainWindow.loadURL('file: //C:/Users/shubham/Desktop/minor project/HTSS/index.html');
    mainWindow.once('ready-to-show', () => {
        // splash.destroy(15*1000);
        setTimeout(() => {
            splash.destroy();
            mainWindow.show();
        }, 4000);
    });
}

app.on('ready', createWindow)