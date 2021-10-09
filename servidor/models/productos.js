import mongoose  from "mongoose";
const Schema= mongoose.Schema;

const productoSchema = new Schema({

    codigo: {type: String,requrired:[true,'Código obligatorio']   
},
categoria: {type: String,requrired:[true,'categoria obligatorio']   
},
nombre: {type: String, requrired:[true,'Nombre del producto obligatorio']
},
description: {String
},
existencia: {type: String,requrired:[true,'existencia obligatorio']   
},
precio: {type: String,requrired:[true,'precio obligatorio']   
},
disponible: {type:Boolean
}, 
imagen: {type:String
},


});


//convertir a mmodelo

const Producto=mongoose.model('Producto', productoSchema);

export default Producto;