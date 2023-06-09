import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import authorActionTypes from "../actions/authorActionTypes";

const CHANGE_EVENT = "change";
let _authors = [];

class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }

  getAuthorBySlug(slug) {
    return _authors.find((author) => author.slug === slug); // true or false
  }
}
