const debug = require('debug')('app:userRouterController')
const User = require('../../models/userModel');
const Group = require('../../models/groupModel');

const get = (req , res) => {
    const { group } = req;

    if(group){
        res.status(200)
        debug(group)
        res.json(group)
    } else {
        res.status(404)
    }
}

const put = (req, res) => {
    debug(req.group[0]._id)
    const { sub } = req.body.user;
    const { _id } = req.group[0];
    let userUnicId = null;

  User.findOne({authid: sub}, (error, user) => {
        if(error){
            res.status(404);
            res.send(error);
        }
        if(user){
            userUnicId = user._id;
            user.groups.push(_id);
            user.save();
        }
    })

    Group.findOne({ _id }, (error, group) => {
        if (error){
            res.status(404);
            res.send(error);
        }
        if(group){
            const addMember = group.members + 1;
            group.members = addMember;
            group.membersId.push(userUnicId);
            group.save();
            res.send(group);
        }
    })

    
}

module.exports= { get, put }