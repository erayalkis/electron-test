const { app, BrowserWindow } = require("electron");
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

  wnd.loadFile("./HTML/index.html");
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
