const express = require( 'express' )
const router = express.Router()
const { projects } = require( '../data' )
const { authUser } = require('../basicAuth')
const {	
	scopeProject,
	canDeleteProject,
} = require('../permissions/project')

router.get( '/', authUser, ( req, res ) => {
  res.send(scopeProject(req.user, projects))
} )

router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
	res.send(req.project)
} )

router.delete('/:projectId', setProject, authUser, authDeleteProject, (req, res) => {
	res.send('Project Deleted')
} )

router.put('/:projectId', setProject, authUser, authEditProject, (req, res) => {
	res.send('Project Edited')
})

function setProject ( req, res, next ) {
  const projectId = parseInt( req.params.projectId )
  req.project = projects.find( project => project.id === projectId )
  
  if ( req.project == null ) {
    res.status( 404 )
    return res.send( 'Project not Found' )    
  }
  next()
}

function authGetProject( req, res, next ) {
  if ( !canDeleteProject(req.user, req.project) ) {
    res.status( 401 )
    return res.send('Not allowed')
  }
  next()
}

function authDeleteProject( req, res, next ){
  if ( !canDeleteProject( req.user, req.project ) ) {
    res.status( 401 )
    return res.send('Not allowed')
  }
  next()
}

function authEditProject(req, res, next) {
	if (!canDeleteProject(req.user, req.project)) {
		res.status(401)
		return res.send('Not allowed')
	}
	next()
}

module.exports = router