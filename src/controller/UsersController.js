const getAllUsers = (req, res) => {
    const data = {
        id : 666,
        name : "Ragastra Haryo Wijanarko", 
        email : "ragastra07@gmail.com", 
        address: "karanganyar, jawatengah"
    }
    res.json({
        message : 'Get all users success',
        kungking : data
    })
}
const CreateNewUsers = (req, res) => {
    console.log(req.body),
    res.json({
        message : 'Create all users success',
        data : req.body
    })
}

const UpdateUsers = (req, res) => {
    const {id} = req.params
    console.log("idUsers : ", id);
    res.json({
        message : 'update curent users success',
        data : req.body
    })
}

const DeleteUsers = (req, res) => {
    const {id} = req.params
    res.json({
        message : 'deleted users success',
        data : {
            id : id, 
            name : "tara arts indonesia", 
            email : "taraarts@gmail.com", 
            address : "jakarta pusat, jawabarat"
        }
    })
}

module.exports = {
    getAllUsers, 
    CreateNewUsers, 
    UpdateUsers, 
    DeleteUsers
}