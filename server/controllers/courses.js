import express from 'express';
import mongoose from 'mongoose';

import CourseMessage from '../models/courseMessage.js';

const router = express.Router();

export const getCourses = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await CourseMessage.countDocuments({});
        const posts = await CourseMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getCoursesBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await CourseMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getCoursesByCreator = async (req, res) => {
    const { name } = req.query;

    try {
        const posts = await CourseMessage.find({ name });

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getCourse = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await CourseMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCourse = async (req, res) => {
    const post = req.body;

    const newCourseMessage = new CourseMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newCourseMessage.save();

        res.status(201).json(newCourseMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedCourse = { creator, title, message, tags, selectedFile, _id: id };

    await CourseMessage.findByIdAndUpdate(id, updatedCourse, { new: true });

    res.json(updatedCourse);
}

export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await CourseMessage.findByIdAndRemove(id);

    res.json({ message: "Course is deleted successfully." });
}

export const likeCourse = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await CourseMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedCourse = await CourseMessage.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedCourse);
}

export const commentCourse = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await CourseMessage.findById(id);

    post.comments.push(value);

    const updatedCourse = await CourseMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedCourse);
};

export default router;