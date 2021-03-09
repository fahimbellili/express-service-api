import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import ITown from '../interfaces/ITown';

const townSchema = new mongoose.Schema(
  {
    schema_version: {
      type: Number,
      default: 1,
      required: true,
    },
    townName: {
      type: String,
      required: false,
      unique: true,
    },
    parkingUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

townSchema.plugin(uniqueValidator);
const Town = mongoose.model<ITown & mongoose.Document>('Town', townSchema);

export default Town;
