//requeries

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar tarea de la db', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}