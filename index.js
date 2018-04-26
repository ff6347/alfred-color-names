const colors = require('./colors.json');
const {exec} = require('child_process');
colors.items.forEach(element => {
  // convert -size 256x256 xc:tomato tomato.png
  exec(`convert -size 256x256 xc:${element.arg} ${element.arg}.png`, (error, stdout, stderr) => {
    console.log(stdout);
    if (error) {
      console.log(error);
    }
  });
});
// console.log(colors);
