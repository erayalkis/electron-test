const { app, BrowserWindow, ipcMain } = require("electron");
try {
  require("electron-reloader")(module);
} catch (e) {}

const createWindow = () => {
  const path = require("path");

  const wnd = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on("minimize", (event) => {
    wnd.minimize();
  });

  ipcMain.on("maximize", (event) => {
    wnd.isMaximized() ? wnd.unmaximize() : wnd.maximize();
  });

  ipcMain.on("close", (event) => {
    wnd.destroy();
  });

  wnd.loadFile("./HTML/index.html");

  wnd.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
