const { app, BrowserWindow } = require('electron')
const url = require("url")
const path = require("path")


function createWindow () {

    const MainWindow = new BrowserWindow()

    MainWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol:"file:",
        slashes:true
    }))

    // Open the DevTools.
    MainWindow.webContents.openDevTools()
}


app.whenReady().then(createWindow)