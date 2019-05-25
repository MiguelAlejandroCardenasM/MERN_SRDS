const express=require('express');
const router=express.Router();
const Task =require('../models/task');
const Materia =require('../models/Materias');
//Busqueda de la BD obtiene valores mediante un metodo asincrono
router.get('/',async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
});
//Muestra en pantalla los resultados
router.post('/',async(req, res)=>{
    const{Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo}=req.body;
    const task=new Task({Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo});
    await task.save();
    res.json('received');
});
//Busca un resultado unico en la BD
router.get('/:id', async(req,res)=>{
    const tasks=await Task.findById(req.params.id);
    res.json(tasks);
})
//
router.get('/validate/:Usuario/:Pass',async(req,res)=>{
    const usuario=await Task.findOne({"Usuario":req.params.Usuario,"Contrasena":req.params.Pass});
    res.json(usuario);
})

//Actualizar registros de la BD
router.put('/:id', async(req,res)=>{
    const {Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo}=req.body;
    const newTask={Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    res.json({status: "Task Updated"})
});
//Borrar Registro de la BD
router.delete('/:id',async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json('deleted');
});

module.exports=router;