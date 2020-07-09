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

        // execFileSync('cmd.exe', [], {shell: true})
      }
    }
  ])
  tray.setContextMenu(contextMenu)
})

function createBat () {
  let echo = 'pause \n echo hello, World \n pause \n start calc.exe'
  fs.writeFileSync('exemplo.bat', echo)
}
