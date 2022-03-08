import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchCourse = (id) => API.get(`/posts/${id}`);
export const fetchCourses = (page) => API.get(`/posts?page=${page}`);
export const fetchCoursesByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchCoursesBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createCourse = (newCourse) => API.post('/posts', newCourse);
export const likeCourse = (id) => API.patch(`/posts/${id}/likeCourse`);
export const comment = (value, id) => API.post(`/posts/${id}/commentCourse`, { value });
export const updateCourse = (id, updatedCourse) => API.patch(`/posts/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
