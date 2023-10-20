import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Box, Tr, Th, Td, Grid, Heading, Table, TableCaption, TableContainer, Thead, Tbody, HStack, Button } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { allCategory } from '../../../redux/actions/category'
import Loader from '../../Layout/Loader/Loader'
const Category = () => {

  const { categories, loading } = useSelector(state => state.category)

  console.log(categories);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(allCategory())
  }, [dispatch])
  return (
    <Grid
      minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

      {loading ? (<Loader />) : (
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading textTransform={'uppercase'} children={"All Categories"} my={16} textAlign={['center', 'left']} />
          <TableContainer w={['100vw', 'full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All Available Categories</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Description</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  categories && categories.map(item => (
                    <Tr>
                      <Td>{item._id}</Td>
                      <Td>
                        <Image src={item.file.url} />
                      </Td>
                      <Td>{item.name}</Td>
                      <Td>{item.description}</Td>
                      <Td>{item.createdBy}</Td>
                      <Td isNumeric>
                        <HStack justifyContent={'flex-end'}>
                          <Button variant={'outline'} color={'cyan.600'}>View Blogs</Button>
                          <Button variant={'outline'} color={'cyan.600'}>
                            <RiDeleteBin7Fill />
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <Sidebar />

    </Grid>
  )
}

export default Category

