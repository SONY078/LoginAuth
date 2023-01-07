const mongoose=require("mongoose");
require('dotenv').config()
mongoose.set('strictQuery', true);
function connect(){

    return mongoose.connect("mongodb+srv://Sony_078:FRiPZKU87vrPs9ol@cluster0.kc1hojz.mongodb.net/?retryWrites=true&w=majority")

}



// mongodb+srv://logan:8kGAnKS7510DbGbi@cluster0.ww6acxi.mongodb.net/?retryWrites=true&w=majority
module.exports=connect;