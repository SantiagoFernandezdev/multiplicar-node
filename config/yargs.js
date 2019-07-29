const opt = {
     base: {
          demand: true,
          alias: 'b'
     }, 
     limite: {
          alias: 'l',
          default: 10
     }
};

const argv = require('yargs')
.command('listar', 'Listar la tabla',opt)
.command('crear', 'Crear la tabla del numero especificado en  la base', opt)
.help().argv;

module.exports = {
     argv
}