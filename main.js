const { app, Tray, Menu, shell } = require('electron')
const fs = require('fs')

let tray
const path = 'C:\\Users\\momen\\Documents\\electron\\tray\\exemplo.bat'
app.on('ready', () => {
  tray = new Tray('./robot.ico')
  tray.setToolTip('Executar .bat')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Criar bat',
      click: () => createBat()
    },
    {
      label: 'Exec Bat',
      click: () => {
        shell.openPath(
          'exemplo.bat'
        )
        // shell.openExternal('https://github.com')

        // execFileSync('cmd.exe', [], {shell: true})
      }
    }
  ])
  tray.setContextMenu(contextMenu)
})

function createBat () {
  let world = 'world'
let echo = `@echo off \n pause \n echo hello, ${world} \n pause \n start calc.exe \n md batFile`
  fs.writeFileSync('exemplo.bat', echo)
}
