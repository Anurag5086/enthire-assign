import axios from "axios";

export const updateImageAction = async (canvas, blob) => {
    return await axios
    .post(`https://enthire-backend.herokuapp.com/updateImage`,{
        canvas: canvas,
        blob: blob
      })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
};

export const getImageListAction = async () => {
  return await axios
  .get(`https://enthire-backend.herokuapp.com/imagelist`)
  .then(res => res.data)
  .catch(err => Promise.reject(err));
};