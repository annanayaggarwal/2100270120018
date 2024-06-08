import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://20.244.56.144',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODIyNTgwLCJpYXQiOjE3MTc4MjIyODAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZkYTk1ZDM0LWFhNmQtNDZkZi1iYjNlLTk5N2Y0ZWY3YzkxOSIsInN1YiI6ImFubmFuYXkyMTEyMDI5QGFrZ2VjLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQUtHRUMiLCJjbGllbnRJRCI6ImZkYTk1ZDM0LWFhNmQtNDZkZi1iYjNlLTk5N2Y0ZWY3YzkxOSIsImNsaWVudFNlY3JldCI6IlhjYm9MRXFlbG51UGRZZGciLCJvd25lck5hbWUiOiJBbm5hbmF5IEFnZ2Fyd2FsIiwib3duZXJFbWFpbCI6ImFubmFuYXkyMTEyMDI5QGFrZ2VjLmFjLmluIiwicm9sbE5vIjoiMjEwMDI3MDEyMDAxOCJ9.M6kkARtciz1cOSJSDzvLIj4cqomTX-MmTQuDNIBxuLs';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
