
const ConsoleTrix = {
    line:'=================================================================================',
    error:function(...args){
        console.log(`\x1b[31m${this.line}\n\n ${args.join(' ')}\n\n${this.line}\x1b[0m\n`)
        },
    log:console.log
    }
module.exports={ConsoleTrix}