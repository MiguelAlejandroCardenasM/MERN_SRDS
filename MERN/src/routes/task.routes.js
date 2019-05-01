const express=require('express');
const router=express.Router();
const Task =require('../models/task');
//Busqueda de la BD obtiene valores mediante un metodo asincrono
router.get('/',async (req,res)=>{
    const tasks=await Task.find();
    res.json('received');
});
//Muestra en pantalla los resultados
router.post('/',async(req, res)=>{
    const{title,description}=req.body;
    new Task({title,description});
    await task.save();
    res.json('received');
});
//Busca un resultado unico en la BD
router.get('/id:', async(req,res)=>{
    const tasks=await Task.findById(req.params.id);
    res.json(tasks);
})
//Actualizar registros de la BD
router.put('/id:', async(req,res)=>{
    const {title,description}=req.body;
    const newTask={title,description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    res.json({status: "Task Updated"})
});
//Borrar Registro de la BD
router.delete('/id:',async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
});

module.exports=router;