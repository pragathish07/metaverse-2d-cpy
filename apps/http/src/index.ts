import express, { Router } from "express";

const app = express();

app.use('/api/v1',);



app.listen(process.env.PORT || 8000,()=>{
    console.log('Server is running on port 8000');
});
