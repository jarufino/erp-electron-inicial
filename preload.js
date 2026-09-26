const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  dbQuery: (query, params) => ipcRenderer.invoke('db-query', query, params),
  platform: process.platform,
  version: process.versions.electron
});