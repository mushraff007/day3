const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://muhammedmusharafkb21ec1135:WW9dB3HZjPPIkXRk@cluster0.fprxqqo.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')   

})