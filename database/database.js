import mongoose from 'mongoose';
mongoose.Promise = Promise;
const MONGODB_URI_DEV = 'mongodb://localhost/HTVideos';
const MONGODB_URI_PROD = 'mongodb+srv://admin:admin@ht-videos-vyvuc.mongodb.net/test?retryWrites=true&w=majority';


const mongodbUrl = process.env.NODE_ENV === 'production' ? MONGODB_URI_PROD : MONGODB_URI_DEV;
const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true });

export default { connect };