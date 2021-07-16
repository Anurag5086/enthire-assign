import axios from "axios";

export const updateImageAction = async (canvas, blob) => {
    return await axios
    .post(`${process.env.BACKEND_URL}/updateImage`,{
        canvas: canvas,
        blob: blob
      })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getImageListAction = async () => {
  return await axios
  .get(`${process.env.BACKEND_URL}/imagelist`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
};