import express from 'express';

const router = express.Router();

import Producto from '../models/productos'

//Agregar una nota
//creamos una funcion de flecha
router.post('/producto-nuevo',async(req, res)=>{

const body = req.body;
try {
    const productoDB=await Producto.create(body);
    res.status(200).json(productoDB);

} catch (error) {
    
    return res.status(500).json({
        mensaje: 'Ups, Ocurrio un error',
        error

    })
}

});
//fincion get con su path, mediante ese id buscamos los documentos
router.get('/producto/:id',async(req, res)=>{
    //se coloca la constante _id porque así las trae mongo
    const _id = req.params.id;
    try {
        const productoDB=await Producto.findOne({_id});
        res.json(productoDB);
    
    } catch (error) {
        
        return res.status(400).json({
            mensaje: 'Ups, Ocurrio un error',
            error
    
        })
    }
    
    });
        //esta funcion me trae todos los documentos
    router.get('/producto',async(req, res)=>{
        //se coloca la constante _id porque así las trae mongo
        
        try {
            const productoDB=await Producto.find();
            res.json(productoDB);
        
        } catch (error) {
            
            return res.status(400).json({
                mensaje: 'Ups, Ocurrio un error',
                error
        
            })
        }
        
        });

        //funcion delete
        router.delete('/producto/:id',async(req, res)=>{
            //se coloca la constante _id porque así las trae mongo
            const _id = req.params.id;
            try {
                const productoDB=await Producto.findByIdAndDelete({_id});
                if(!productoDB){
                    return res.status(400).json({
                        mensaje: 'No se encuentró el id indicado', 
                        error
                    })

                }
                res.json(productoDB);
            
            } catch (error) {
                
                return res.status(400).json({
                    mensaje: 'Ups, Ocurrio un error',
                    error
            
                })
            }
            
            });

            router.put('/producto/:id',async(req, res)=>{
                //se coloca la constante _id porque así las trae mongo
                const _id = req.params.id;
                const body = req.body;
                try {
                    const productoDB=await Producto.findByIdAndUpdate(_id
                        ,body,{new:true});
                    res.json(productoDB);
                
                } catch (error) {
                    
                    return res.status(400).json({
                        mensaje: 'Ups, Ocurrio un error',
                        error
                
                    })
                }
                
                });

            


//Exportamos la configuración de express app
module.exports = router;
