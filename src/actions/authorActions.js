import dispatcher from "../appDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from "./authorActionTypes";

export function saveAuthor(author) {
  return authorApi.saveAuthor(author).then((savedAuthor) => {
    dispatcher.dispatch({
      actionType: author.id
        ? actionTypes.UPDATE_AUTHOR
        : actionTypes.CREATE_AUTHOR,
      author: savedAuthor,
    });
  });
}

export function loadAuthors() {
  return authorApi.getAuthors().then((authors) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHOR,
      authors: authors,
    });
  });
}

export function deleteAuthor(id) {
  return authorApi.deleteAuthor().then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_AUTHOR,
      id: id,
    });
  });
}
