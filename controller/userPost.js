const { USER, POST } = require('../models/index');
exports.createPost = async (req, res) =>{
    try{
        const {user, body : { caption }} = req
         const file = req.file ? req.file.filename : null;
         //vaildate user id
          const isExist = await USER.findOne({ _id: user.id });
         if (!isExist) return res.send({ status: 422, message: "Invalid user id" });

         //create user post
         const newPost = await POST.create({userId: user.id, caption, file})
         return res.send({ status: 200, message: "Post Created Successfully", data: newPost})
        }catch(error){
        console.log(error);
    }
}

exports.getAllUserPost = async (req, res) =>{
    try{
        const { startRow = 0 , endRow = 10 } = req.query
        const skip = startRow;
        const limit = endRow-startRow ;
        
        //find all user posts
         const allPost = await POST.find().skip(skip).limit(limit);
         return res.send({ status: 200, message: "Post Created Successfully", data: allPost })
        }catch(error){
        console.log(error);
    }
}

exports.increaseLike = async (req, res) =>{
    try{
        const { id } = req.params

        //vaildate user id
          const isPostExist = await POST.find({ _id: id });
         if (!isPostExist) return res.send({ status: 422, message: "Invalid id" });

        //increase Like
         const like = await POST.updateOne( { _id: id }, { $inc: { like: 1 } });
         return res.send({ status: 200, message: "Like Count Increase Successfully", data: like })
        }catch(error){
        console.log(error);
    }
}

exports.getUserWisePost = async (req, res) =>{
    try{
        const { userId } = req.params

        //vaildate user id
        const isExist = await USER.find({ _id: userId });
         if (!isExist) return res.send({ status: 422, message: "Invalid user id" });

        //increase Like
         const userPost = await POST.findOne( { userId });
         return res.send({ status: 200, message: "User Post Feache Successfully", data: userPost})
        }catch(error){
        console.log(error);
    }
}