const express=require('express');
const app=new express();
const PORT=4001;
const movieModel=require('./model/movieData');
const cors=require('cors');
app.use(cors())
app.use(express.json())
require('./connection');
//fetch data
app.get('/movies',async(req,res)=>{
    console.log('inside')
    
    try {
        const data=await movieModel.find();
        
        console.log(data)
        res.sent(data)
    } catch (error){
        console.log()
        
    }
})

app.listen(PORT,()=>{
    console.log('server is running on PORT 4000')
})
//add a new document
app.post('/newmovie',async(req)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const savedata= await datasave.save();
        res.send('past successful');

    }catch (error){
        console.log(error)
    }
})

//delete a document
app.delete('/movieremoval/:id',async(req,res)=>{
    try{
        await movieModel.findByIdAndDelete(req.params.id);
        res.sent('Deleted successfully')
    } catch (error) {
        console.log(error)
    }
})