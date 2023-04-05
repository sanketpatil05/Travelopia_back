const mongoose = require("mongoose");

const travelschema = mongoose.Schema({
    name:{ type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  no_of_travellers:{type:Number, require:true },
  budget:{ type: Number, required: true },

});


 const Travel = mongoose.model("travel", travelschema);

module.exports=Travel;