'use strict';

const fs = require('fs');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const exec = require('child_process').exec;

const buildPath = "build/ios";
const cmd = 'react-native bundle' +
  ' --platform ios' +
  ' --dev false' +
  ' --entry-file index.js' +
  ' --bundle-output ' + buildPath + '/index.ios.bundle' +
  ' --assets-dest ' + buildPath +
  ' --reset-cache';

console.log('  building for android bundle....\n')
rm(buildPath, function () {
  createFolder(buildPath, () => {
    exec(cmd, function (error, stdout, stderr) {
      if (error != null) {
        console.log(chalk.red(error));
      } else {
        console.log(`${stdout}`);
        if (stderr != null) {
          console.log(chalk.red(stderr));
        }
        console.log(chalk.cyan('  Build complete.\n'))
      }
    });
  });
});


/////////////////////////////
/////// createFolder
/////////////////////////////

function createFolder(dirname, callback) {
  fs.exists(dirname, function (exists) {
    if (exists) {
      callback();
    } else {
      createFolder(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
      });
    }
  });
}

