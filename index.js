const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        frame: false,
        webPreferences: {
        nodeIntegration: true
        }
    });
    
    mainWindow.loadFile('index.html');
});