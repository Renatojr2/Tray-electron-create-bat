const { app, Tray, Menu } = require('electron')
const fs = require('fs')
const { spawn, exec } = require('child_process')

let tray;
const path = 'C:\\Users\\momen\\Documents\\electron\\tray\\exemplo.bat'
console.log(path)
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
    click: () => spawn('cmd.exe', [ '/c','exemplo.bat'])
  }

  ])
  tray.setContextMenu(contextMenu)
 
})






function createBat () {
  let echo = 'pause \n echo hello, World \n pause \n start calc.exe'
   fs.writeFileSync('exemplo.bat', echo)
  
}
