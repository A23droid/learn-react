import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext); // Recieve the data
  
  if (!user) return <div>Please Login!</div>
  
  return <div>Welcome {user.username}!</div>
}

export default Profile