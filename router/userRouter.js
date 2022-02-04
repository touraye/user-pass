const express = require( 'express' )
const userRouter = express.Router()
const { user } = require( '../data' )
const { canViewUser, canEditUser, scopeUser } = require('../permissions/user')


userRouter.get('/users', authViewUser, (req, res) => {
	res.send(scopeUser(user))
})

function authViewUser( req, res, next ) {
  if ( !canViewUser(req.user) ) {
    res.status( 401 )
    return res.send(scopeUser)
  }
  next()
}

module.exports = userRouter