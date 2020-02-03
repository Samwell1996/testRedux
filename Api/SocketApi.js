import socket from 'socket.io-client';

class SocketApi {
  socket = null;

  init(token) {
    this.socket = socket(
      'https://apiko-intensive-backend.herokuapp.com',
      {
        query: {
          token,
        },
        transport: ['websocket'],
      },
    );

    this.socket.on('connect', () => {
      console.log('Connect');
      console.log({ socket });
    });
  }

  handleMessages(handler) {
    console.log('handler');
    this.socket.on('message', (message) => {
      console.log('MESSAGE', message);
      handler(message);
    });
  }
}

export default new SocketApi();
