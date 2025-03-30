const { app, BrowserWindow } = require('electron');

let mainWindow;

/* COMO EJECUTAR (Electron) 
1) Para ejecutar electron debes tener instalado Node.js
2) Instalarlo con 'npm install'
3) Ejecutar con 'npm run dev'
*/

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