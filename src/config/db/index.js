import mongoose from 'mongoose';

async function connect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1/f8_education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect sussessfully!!!');
  } catch (error) {
    console.log('Connect failure!!!');
  }
}

export { connect };
