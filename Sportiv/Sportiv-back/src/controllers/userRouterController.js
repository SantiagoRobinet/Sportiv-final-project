
const get = (req , res) => {
    const { user } = req;

    if(user){
        res.status(200)
        res.json(user)
    } else {
        res.status(400)
    }
}

module.exports= { get }