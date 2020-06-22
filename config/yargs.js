const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    alias: 'c',
    default: 'true',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        completado
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
}