const {app, BrowserWindow, ipcMain} = require('electron');


let mainWindow;

// app crea un proceso por default, una vez este listo crea la ventana
app.on('ready', createWindow);

// Creamos la ventana
function createWindow() {

  // La ventana es un nuevo navegador
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,

        // Para cargar scripts antes
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Traemos el index.html
    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}