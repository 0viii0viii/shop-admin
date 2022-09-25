import User from '../Model/userSchema'


const register = async (req:any, res:any, next:any) => {
        return User.findOne({id:"hello"});
};

export { register };