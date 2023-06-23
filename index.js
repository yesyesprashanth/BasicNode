import Express from 'express';
const app = Express();

app.use(Express.json());

app.get('/', (req,res)=>{
    res.json("Hello World");
})

app.listen(3000, ()=>{
    console.log("Server Started");
})
