exports.getAllPost = (req, res)=> {
    res.send("Get all posts")
}

exports.getSinglePost = (req, res)=> {
    res.send("This is post route " +req.params.postId)
}

exports.createNewPost = (req, res)=> {
    res.send("Create a new post...")
}

exports.updateExitingPost = (req, res)=> {
    res.send("Update an existing post..." +req.params.postId)
}

exports.deleteExistingPost = (req, res)=> {
    res.send("Delete an post..." +req.params.postId)
}