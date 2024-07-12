const mongoose =require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieYear:Number,
    category:String

});
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData;