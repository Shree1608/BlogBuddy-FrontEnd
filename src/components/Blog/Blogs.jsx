import { Button, Container, HStack,Image, Heading, Input , Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { allBlogs } from '../../redux/actions/blog'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { allCategory } from '../../redux/actions/category';
import Loader from '../Layout/Loader/Loader';

const Blog = ({views , title , imageSrc , id  , creator , description ,category }) =>{
    return (
        <>
        <VStack className='blog' alignItems={['center' ,'flex-start']} paddingTop={8}>
            <Image src={imageSrc}
             boxSize={'60'}
             objectFit={'contain'}
            />
            <Heading textAlign={['center' ,'left']} maxW={'200px'} fontFamily={'sans-serif'}
            noOfLines={3} size={'sm'}
            children={title}
            />
            <Text   noOfLines={2}  children ={description}/>
            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'} noOfLines={2}  children = {'Creator'}/>
                <Text fontFamily={'body'} noOfLines={2}  children = {creator}/>
            </HStack>
            <Heading textAlign={'center'} size={'xs'} children ={`Category ${category}` }/>
            <Heading textAlign={'center'} size={'xs'} children ={`Views -${views}` }/>
        </VStack>
        </>
    )
}
const Blogs = () => {
    const [ keyword , setKeyword] = useState('');
    const [ category , setCategory] = useState('');
    
    const dispatch = useDispatch();

    const { categories } = useSelector(state => state.category)
    const { blogs , error , message } = useSelector(state => state.blog);
   
    useEffect(() => {
      dispatch(allCategory())
    }, [dispatch])
   
    useEffect(() => {
        dispatch(allBlogs(category , keyword));

        if (error) {
          toast.error(error);
          dispatch({ type: 'clearError' });
        }
    
        if (message) {
          toast.success(message);
          dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, category , keyword ,message ,error]);
    
    console.log(blogs);

    
  return (
    
   <Container minH={'95vh'} maxW='container.lg' paddingY={8} >
     <Heading children = "All Blogs" margin={'8'}/>
     
     <Input 
      value={keyword} 
      onChange={e => setKeyword(e.target.value)}
      placeholder='Search blog ....'
      type='text'
      focusBorderColor='cyan.500'
      />
      <HStack 
      overflowX={'auto'}
      paddingY={'8'}
      >
        {
           categories && categories.map((item , index)=>(
                <Button key={index} onClick={()=>setCategory(item.name)} minW={'60'}>
                <Text children ={item.name}/>
                </Button>
            ))
        }
      </HStack>
      <Stack
      paddingTop={10}
      paddingBottom={10}
      direction={['column' , 'row']}
      flexWrap={'wrap'}
      justifyContent={['flex-start' , 'space-evenly']}
      alignItems={['center' , 'flex-end']}
      >
        {
            blogs  ? (

              blogs.map(item=>(
                  <Blog
                  key={item._id}
                   title={item.title}
                   description={item.content}
                   category = {item.category}
                   views={23}
                   imageSrc={item.file.url}
                   creator={item.author}
                   />
            ))):( 
            
            <Loader/> )
        }
      </Stack>
   </Container>
  )
}

export default Blogs
