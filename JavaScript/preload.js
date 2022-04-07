const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("nav", {
  minimize: () => ipcRenderer.send("minimize"),
  maximize: () => ipcRenderer.send("maximize"),
  close: () => ipcRenderer.send("close"),
});
