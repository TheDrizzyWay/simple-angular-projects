const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const documents = {};

io.on('connection', socket => {
    let previousId;
    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId);
      previousId = currentId;
    };
  
    socket.on('getDoc', docId => {
      safeJoin(docId);
      socket.emit('document', documents[docId]);
    });
  
    socket.on('addDoc', doc => {
      documents[doc.id] = doc;
      safeJoin(doc.id);
      io.emit('documents', Object.keys(documents));
      socket.emit('document', doc);
    });
  
    socket.on('editDoc', doc => {
      documents[doc.id] = doc;
      socket.to(doc.id).emit('document', doc);
    });
  
    io.emit('documents', Object.keys(documents));
  });

server.listen(5000, () => console.log('server running...'));
