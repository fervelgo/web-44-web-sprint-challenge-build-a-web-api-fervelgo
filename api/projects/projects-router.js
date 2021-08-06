// Write your "projects" router here!
const express = require('express');
const { validateProjectId } = require('./projects-middleware.js')

const Projects =require('./projects-model.js')

const router = express.Router();


router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.json(projects);
    })
    .catch(error =>{
        next(error)
    });
});

router.get('/:id', validateProjectId, (req, res) => {
    console.log(req.project)
    res.json(req.project)
})

router.post('/api/projects', (req, res) => {
    
})

router.put('/api/projects/:id', validateProjectId, (req, res) => {
    
})

router.delete('/api/projects/:id', validateProjectId, (req, res) => {
    
})

router.get('/api/projects/:id/actions', validateProjectId, (req, res) => {
    
})

module.exports = router;