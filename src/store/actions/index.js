import { ADD_ARTICLE } from "../actions/actionTypes";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };