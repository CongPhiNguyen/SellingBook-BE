import dbConnect from '../../../utils/mongodb.js';
import User from '../../../models/user.js';
const mongoose = require('mongoose');

dbConnect();
export default async (req, res) => {
    const {method} = req;
    console.log("method",method);
    // CODE các API ở đây
    switch(method)
    {
        case 'GET':
            try{
                const user = await User.find({});

                res.status(200).json({success: true, data: user});
            }
            catch (error){
                console.log("error",error)
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try{
                console.log("req.body", req.body);
                const user = await User.create(
                    {
                        userID: req.body.userID,
                        name: req.body.name,
                        typeID: req.body.typeID,
                        views: req.body.views
                    }
                );
                console.log("user", user)
                res.status(200).json({success: true, data: user});
            }
            catch (error){
                console.log("error",error)
                res.status(400).json({success: false});
            }
            break;
        // Ở đây muốn tìm trường gì thì viết tên trường đó vào req.body
        // Đã test = postman, còn axios thì chưa :vv
        case 'PATCH':
            try{
                console.log("req.body", req.body);
                const user = await User.find(req.body);
                console.log("user", user)
                res.status(200).json({success: true, data: user});
            }
            catch (error){
                console.log("error",error)
                res.status(400).json({success: false});
            }
            break;
        default: 
            res.status(400).json({success: false});
    }
    // res.status(200).json({ name: 'John Doe' })
}
