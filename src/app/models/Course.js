import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import slug from 'mongoose-slug-generator';
mongoose.plugin(slug);

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true },
);

const Course = mongoose.model('Course', CourseSchema);
export { Course };
