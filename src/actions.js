import axios from "axios";

export const updateImageAction = async (canvas, blob) => {
    return await axios
    .post('http://localhost:8000/updateImage',{
        canvas: canvas,
        blob: blob
      })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getImageListAction = async () => {
  return await axios
  .get('http://localhost:8000/imagelist')
  .then(res => res.data)
  .catch(err => Promise.reject(err));
};