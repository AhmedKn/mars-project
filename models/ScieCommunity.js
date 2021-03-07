const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ScieCommunitySchema =new Schema({
user : {
    type : String
},
message : {
    type : String
},
type:{
    type : String
},
date:{
    type : String
},
acctypem:{
    type : String
},
regionm:{
    type : String
}
})

module.exports=ScieCommunity=mongoose.model("ScieCommunity",ScieCommunitySchema)