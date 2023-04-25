import express from 'express'


const PORT = 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Wellcome</h1>');
})

app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
})