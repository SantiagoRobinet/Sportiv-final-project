const debug = require('debug')('app:userRouterController')

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

module.exports= { get }