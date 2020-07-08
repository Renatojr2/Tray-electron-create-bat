const { app, Tray, Menu } = require('electron')
const util = require('util')
const fs = require('fs')

const { spawn, execFileSync } = require('child_process')

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
        const bat = spawn('cmd.exe', ['/c', 'exemplo.bat'])

        bat.stdout.on('data', data => {
          console.log(data.toString())
        })

        bat.stderr.on('data', data => {
          console.error(data.toString())
        })

        bat.on('exit', code => {
          console.log(`Child exited with code ${code}`)
        })
      }
    }
  ])
  tray.setContextMenu(contextMenu)
})

function createBat () {
  let echo = 'pause \n echo hello, World \n pause \n start calc.exe'
  fs.writeFileSync('exemplo.bat', echo)
}
