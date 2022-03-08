import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    price: Number,
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var CourseMessage = mongoose.model('CourseMessage', courseSchema);

export default CourseMessage;