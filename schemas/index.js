import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
      'mongodb+srv://sparta-user:aaaa4321@express-mongo.lr8qqob.mongodb.net/?retryWrites=true&w=majority&appName=express-mongo',
      {
        dbName: 'todo_memo',
      },
    )
    .then(() => console.log('Successfully connected to the MongoDB'))
    .catch((err) => console.log('Failed to connect to the MongoDB:', err));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

export default connect;
