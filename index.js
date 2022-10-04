const server = require('./src/app');

const {conn, Users, Products } = require('./src/db'); 

conn.sync({force: false}).then(() => {
    console.log('base de datos conectada')

    
    server.listen(3001, () => {
        console.log('server escuchando al puerto 3001');
    })
})
