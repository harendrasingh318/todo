const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


const {createTodo, updateTODO} =require("./types");
const { todo }= require("./db");

app.post('/todo',async (req,res)=>{
    const createpayload = req.body;
    const parsepayload = createTodo.safeparse(createpayload);

    if(!parsepayload.success){
        res.status(411).json({
            msg:"invalid inputs"
        })
        return;
    }else{
        await todo.create({
            title: createpayload.title,
            desciption : createpayload.desciption,
            completed : false
        })
        res.json({
            msg: "to do created"
        })

    }
});
app.get('/todos',async (req,res)=>{

    const todos = await todo.find({});

    res.json({

        todos
    })

});
app.put('/completed',async (req,res)=>{
const updatepayload = req.body;

    const parsepayload = updateTODO.safeparse(updatepayload);

    if(!parsepayload.success){
        res.status(411).json({
            msg:"invalid inputs"

        })
        return;
    }else{

        await todo.update({

            _id: req.body.id
        },
    {
        completed:true
    })
    }
    res.json({

        msg: "todo marked as completed"
    })

});

const port =3123;

app.listen(port, ()=>{

    console.log(`server is listning on port ${port}`);
});

