import axios from 'axios';

import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST } from './types';

import { setAlert } from './alert.action';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        status: err.response.status,
        msg: err.response.data.msg
      }
    });
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        status: err.response.status,
        msg: err.response.data.msg
      }
    });
  }
};

export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        status: err.response.status,
        msg: err.response.data.msg
      }
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        status: err.response.status,
        msg: err.response.data.msg
      }
    });
  }
};
