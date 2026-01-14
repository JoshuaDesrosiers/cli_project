// This file will display the menu and handle the user's input.

const prompt = require('prompt-sync')({ sigint: true });
const {SpellBook} = require('./SpellBook.js');
const {ConsoleTrix} = require('./consoleTrix.js')

const showMenu = () => {
  let lives = 3;
  while (lives) {
    console.log('');
    const command = prompt('root$ ').trim().split(' ');
      try{
        if(!SpellBook.cast(command))
          throw new Error('this function does NOT exist, who do i look like Trixy?')
      }
      catch (error) {
        lives--
        ConsoleTrix.error('error:',error.message+'...'); 
        ConsoleTrix.log('penalty: ', 3-lives+'/3')
      }
    }
  
};

module.exports = { showMenu };
