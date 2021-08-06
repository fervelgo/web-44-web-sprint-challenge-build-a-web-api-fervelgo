const Project = require('./projects-model')


async function validateProjectId(req,res,next) {
    try{
        const project = await Project.get(req.params.id)
        if(!project) {
            res.status(404).json({ message: "No project by that ID breh"})
        } else {
            req.project = project
            next()
        }
    } catch (err) {
        res.status(500).json({message: "Couldn't find project breh, check your id plz"})
    }
    
}

module.exports = {
    validateProjectId
}
