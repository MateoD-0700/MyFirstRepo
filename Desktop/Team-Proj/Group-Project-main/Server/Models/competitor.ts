import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const CompetitorItemSchema = new Schema
({
    fullname: String,
    description: String
},
{
    collection: "competitor"
});

const Model = mongoose.model("Competitor", CompetitorItemSchema);
export default Model;