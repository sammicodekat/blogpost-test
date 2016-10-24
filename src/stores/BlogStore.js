import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage';

let _blogs = [];

class ChatRoomStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_BLOGS':
        _message = action.payload;
        this.emit('CHANGE');
        break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb)
  }

  getBlogs(){
    return _blogs
  }
}

export default new BlogStore;