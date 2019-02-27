var mongoose = require("mongoose");

//this is a schema object from mongoose
var Schema=mongoose.Schema;

//create article schema
var ArticleSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: "Comm"   
    }]

});

//create a model from ArticleSchema
//this will creatt the collection in mongo
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;