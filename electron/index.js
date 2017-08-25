const {app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


app.on('ready', () => {
  let mainWindow = new BrowserWindow({width: 1000, height: 800, icon:'icon.png'})

  mainWindow.loadURL(url.format({
     pathname: path.join(__dirname, 'site/index.html'),
     protocol: 'file:',
     slashes: true
  }))
})
