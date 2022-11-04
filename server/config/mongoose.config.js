const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost/administrador_de_productos_DB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conexion a base de datos establecida"))
    .catch(err => console.log('algo salio mal tratnado de conectarse a la base de datos', err));