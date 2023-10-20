import React from 'react'
import Sidebar from '../Sidebar'
import { Box, Tr ,Th ,Td, Grid, Heading, Table, TableCaption, TableContainer, Thead, Tbody, HStack, Button } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const User = () => {

  const users =[
    {
      _id : "87878787hghghh" ,
      name : "shree" ,
      email :'shree@gmail.com' ,
      role : 'admin',

    }
  ]

  
  return (
    <Grid 
    minH={'100vh'} templateColumns={['1fr' , '5fr 1fr']}>
      <Box p={['0' , '16']} overflowX={'auto'}>
      <Heading textTransform={'uppercase'} children={"All Users"} my={16}  textAlign={['center' ,'left']}/>
      <TableContainer w={['100vw' , 'full']}>
        <Table variant={'simple'} size={'lg'}>
          <TableCaption>All Available Users</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
           {
            users.map(items=>(
              <Row key={items._id} item={items} />
            ))
           }
          </Tbody>
        </Table>
      </TableContainer>
      </Box>
      
   <Sidebar/>

   </Grid>
  )
}

export default User

function Row(item) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} color={'cyan.600'}>Change Role</Button>
          <Button variant={'outline'} color={'cyan.600'}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}