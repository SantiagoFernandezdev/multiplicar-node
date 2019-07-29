const fs = require('fs');

let crearArchivo = (base, limite) => {

     return new Promise((resolve, reject) => {
          let data = '';

          for (let i = 1; i <= limite; i++) {
               data = data + base + ' * ' + i + ' = ' + (base * i) + '\n';
          }

          fs.writeFile(`multiplicar/tablas/tabla-${ base }.txt`, data, (err) => {
               if (err) {
                    reject('Error: ' + err);
               } else {
                    resolve(`tabla-${ base }.txt creado correctamente`);
               }
          })
     })
}

let listarTabla = (base, limite) => {
     return new Promise((resolve, reject) => {
          if(!Number(base) || !Number(limite)) {
               reject('Debe introducir valores numericos');
          } else {
               let data = '';
               for (let i = 1; i <= limite; i++) {
                    data = data + base + ' * ' + i + ' = ' + (base * i) + '\n';
               }
               resolve(data);
          }
     })

}

module.exports = {
     crearArchivo,
     listarTabla
}