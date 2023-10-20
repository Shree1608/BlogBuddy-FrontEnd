import { Avatar } from '@chakra-ui/react'
import React from 'react'
import './profile.css'
import Loader from '../Layout/Loader/Loader'
const Profile = ({ user , loading }) => {
 
  return (
    <div className='profile_card'>
      {
        loading ? (
          <Loader />
        ) : (
          <div>
                <div key={user._id}>
                  <div className='avtar'>
                    <Avatar src={user.file.url} margin={5} size={"lg"} />
                  </div>
                  <h1>{user.name}</h1>
                  <p className='email'>{user.email}</p>
                  <p>Created At : {user.createdAt.split('T')[0]}</p>
                  <p>User Type : {user.role}</p>
                  <p>CREATE YOUR BLOGS GO TO YOUR DASHBOARD </p>
                </div>
          </div>
        )
      }

    </div>
  )
}

export default Profile
