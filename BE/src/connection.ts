import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://heon:skfnxh123@cluster0.bygfm.mongodb.net/?retryWrites=true&w=majority');
        return console.log('DB CONNECTED')
    } catch(e) {
        console.log(`${e}: connection failed`)
    }
}

export default connectDB;