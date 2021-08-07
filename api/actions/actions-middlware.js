const Action = require('./actions-model')


async function validateActionId(req,res,next) {
    try{
        const action = await Action.get(req.params.id)
        if(!action) {
            res.status(404).json({ message: "No action by that ID breh"})
        } else {
            req.action = action
            next()
        }
    } catch (err) {
        res.status(500).json({message: "Couldn't find action breh, check your id plz"})
    }
    
}



module.exports = {
    validateActionId,
    // validateProject
}
