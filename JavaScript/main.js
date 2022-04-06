const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const wnd = new BrowserWindow({
    width: 800,
    height: 600,
  });

  wnd.loadFile("../HTML/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
