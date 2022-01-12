import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
  },
  iso3: {
    type: String,
  },
  iso2: {
      type: String,
  },
  
});
