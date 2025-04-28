const { app, BrowserWindow } = require('electron');

let mainWindow;

/* COMO EJECUTAR (Electron) 
1) Para ejecutar electron debes tener instalado Node.js
2) Instalarlo con 'npm install'
3) Ejecutar con 'npm run dev'
*/

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'Musify',
        width: 1200,
        height: 650,
        frame: false,
        icon: __dirname + '/image/logo.png',
        webPreferences: {
        nodeIntegration: true
        }
    });
    
    mainWindow.loadFile('index.html');
});

