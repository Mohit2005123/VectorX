import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
dotenv.config();
const app = express();
const PORT= process.env.PORT || 3000;

const __dirname= path.resolve()


app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})