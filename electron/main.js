const path = require("path");
const axios = require("axios");

const { app, BrowserWindow, Menu, dialog } = require("electron");
const isDev = require("electron-is-dev");
const { electron } = require("process");

// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS;

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // configure menu
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Open Folder",
          click() {
            dialog
              .showOpenDialog({
                properties: ["openDirectory"],
              })
              .then((result) => {
                if (!result.canceled) {
                  const url = "http://localhost:8080/api/executions";
                  const headers = {
                    "Content-Type": "application/json",
                  };
                  const body = {
                    folderPath: result.filePaths[0],
                  };

                  axios
                    .post(url, body, {
                      headers,
                    })
                    .then(({ data }) => {
                      win.loadURL(
                        isDev
                          ? `http://localhost:3000/#/executions/${data.id}/applications`
                          : `file://${path.join(
                              __dirname,
                              `../build/index.html#/executions/${data.id}/applications`
                            )}`
                      );
                    })
                    .catch(() => {
                      win.loadURL(
                        isDev
                          ? `http://localhost:3000/#/invalid-execution`
                          : `file://${path.join(
                              __dirname,
                              `../build/index.html#/invalid-execution`
                            )}`
                      );
                    });
                }
              });
          },
        },
        { type: "separator" },
        {
          label: "Exit",
          accelerator: "Ctrl+Q",
          click() {
            console.log("exit");
          },
        },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((error) => console.log(`An error occurred: , ${error}`));
  }

  const notification = {
    title: "Basic Notification",
    body: "Notification from the Main process",
  };
  new Notification(notification).show();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
