const net = require('net');

const server = net.createServer(socket => {
  console.log('Client connected');

  socket.on('data', data => {
    const jsonData = JSON.parse(data.toString());
    console.log('Data received from client:');
    console.log('itemAdded:', jsonData.itemAdded);
    console.log('selectedSize:', jsonData.selectedSize);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
