import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'

import {  Grid, Container, HStack, Image, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { myBlogs } from '../../../redux/actions/blog'
import Loader from '../../Layout/Loader/Loader'

const MyBlog = () => {

    const { myblogs, loading } = useSelector(state => state.blog);

    const dispatch = useDispatch();

    
    
    useEffect(() => {
        dispatch(myBlogs())
    }, [dispatch]);
    
    console.log(myblogs);

    return (
        <Grid
            minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

            {
                loading ? <Loader /> : (
                    <>
                        <Container minH={'95vh'} maxW='container.lg' paddingY={'12'}>
                            <Heading children="All Blogs" margin={'8'} textAlign={['center', 'left']} />

                            <Stack
                                direction={['column', 'row']}
                                flexWrap={'wrap'}
                                justifyContent={['flex-start', 'space-evenly']}
                                alignItems={['center', 'flex-end']}
                            >
                                {
                                    myblogs && myblogs.map(item =>(
                                        <Blog
                                        id={item._id}
                                            title={item.title}
                                            description={item.content}
                                            views={23}
                                            imageSrc={item.file.url}
                                            creator={item.author}
                                        />
                                    ))
                                }
                            </Stack>
                        </Container>
                    </>
                )
            }
            <Sidebar />

        </Grid>
    )
}

export default MyBlog



const Blog = ({ views, title, imageSrc, id, creator, description }) => {
    return (
        <>
            <VStack className='blog' alignItems={['center', 'flex-start']}>
                <Image src={imageSrc}
                    boxSize={'60'}
                    objectFit={'contain'}
                />
                <Heading textAlign={['center', 'left']} maxW={'200px'} fontFamily={'sans-serif'}
                    noOfLines={3} size={'sm'}
                    children={title}
                />
                <Text noOfLines={2} children={description} />
                <HStack>
                    <Text fontWeight={'bold'} textTransform={'uppercase'} noOfLines={2} children={'Creator'} />
                    <Text fontFamily={'body'} noOfLines={2} children={creator} />
                </HStack>
                {/* <Heading textAlign={'center'} size={'xs'} children ={`Blogs -${totalBlog}` }/> */}
                <Heading textAlign={'center'} size={'xs'} children={`Views -${views}`} />

                <Stack direction={['column', 'row']} alignItems={'center'}>
                    {/* <Link to={`/blog/${id}`} >
                <Button variant={'ghost'} colorScheme='cyan'>See More</Button>
            </Link> */}
                </Stack>

            </VStack>
        </>
    )
}
