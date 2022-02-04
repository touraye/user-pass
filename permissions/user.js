const { ROLE } = require( '../data' )

function canViewUser( user ) {
  return (
    req.user.role === ROLE.ADMIN || req.userId === user.id
  )
}

function canCreateUser( res, req, next ) {
  return req.user.role === ROLE.ADMIN
}

function scopeUser( req, res, next ) {
  
}

module.exports = {
  canViewUser,
  canCreateUser 
}