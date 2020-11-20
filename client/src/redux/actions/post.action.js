import api from '../../utils/api';
import setAuthToken from '../../utils/setAuthToken';

import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

import { setAlert } from './alert.action';

export const getPosts = () => async (dispatch) => {
  try {
    setAuthToken(localStorage.token);
    const res = await api.get('/posts');

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
    const res = await api.put(`/posts/like/${id}`);

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
    const res = await api.put(`/posts/unlike/${id}`);

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
    await api.delete(`/posts/${id}`);

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

export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/posts', formData);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
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

export const getPost = (id) => async (dispatch) => {
  try {
    setAuthToken(localStorage.token);
    const res = await api.get(`/posts/${id}`);

    dispatch({
      type: GET_POST,
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

export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/posts/comment/${postId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
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

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
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
