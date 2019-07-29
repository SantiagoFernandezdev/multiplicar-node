const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let command = argv._[0];

switch(command) {
     case 'crear':
          crearArchivo(argv.base, argv.limite).then((filename) => {
               console.log(filename);
          }).catch((err) => {
               console.log(err);
          })
     break;

     case 'listar':
          listarTabla(argv.base, argv.limite).then((data) => {
               console.log(data);
          }).catch((err) => {
               console.log(err);
          })
     break;

     default:
          console.log('No existe el comando');
}