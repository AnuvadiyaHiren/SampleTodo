"use strict"

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./login/login.test.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  }]

  /*
   {
    browserName: 'chrome'
  }*/
}