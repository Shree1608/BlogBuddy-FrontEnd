import React from 'react'
import UserSidebar from './UserSidebar'
import { Box, Grid } from '@chakra-ui/react'

const UserDashboard = () => {
  return (
    <Grid 
    minH={'100vh'} templateColumns={['1fr' , '5fr 1fr']}>
      
      <Box>
        
      </Box>
   <UserSidebar/>

   </Grid>
  )
}

export default UserDashboard
