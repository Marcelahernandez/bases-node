const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption:true,
        default:false,
        describe:'Muestra la tabla en consola'
    })
    .option('hasta',{
        alias:'hasta',
        type:'number',
        demandOption:true,
        describe:'Es el limite'
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv