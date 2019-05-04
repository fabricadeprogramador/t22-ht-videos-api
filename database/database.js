import mongoose from 'mongoose';
mongoose.Promise = Promise;

const mongodbUrl = 'mongodb://localhost/HTVideos';
const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true });

export default { connect };