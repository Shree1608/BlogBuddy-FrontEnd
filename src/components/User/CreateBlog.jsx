import React, { useEffect, useState } from 'react'
import { Image, Container, Grid, Heading, Input, Select, VStack, Button } from '@chakra-ui/react'
import { fileUploadCss } from '../Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { allCategory } from '../../redux/actions/category';
import toast, { Toaster } from 'react-hot-toast'
import { createBlog } from '../../redux/actions/blog';
import UserSidebar from './UserSidebar';
const CreateBlog = () => {
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [category , setCategory] = useState('');
  const [image , setImage] = useState('');
  const [imagePrev , setImagePrev] = useState('');
  const [isSubmited , setIsSubmited] = useState(false);

  const { error , message , loading} = useSelector(state => state.blog)
  const { categories } = useSelector(state => state.category)
  console.log(category);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isSubmited){
      setTitle('');
      setDescription('');
      setCategory('');
      setImage('');
      setImagePrev('');
    }
  },[isSubmited])
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }
    if(message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(allCategory())
  }, [dispatch])

  const submitHandler = e =>{
    e.preventDefault();

    if( title === "" || description ==="" || category === "" || image === "" ){
      toast.error('Please Enter All the fields')
    }
    const myData = new FormData()

    myData.append('title' , title);
    myData.append('content' ,description);
    myData.append('category' , category)
    myData.append('file' ,image)

    
    dispatch(createBlog(myData))
    .then(()=>{
      setIsSubmited(true)
    }).catch(error=>{
      console.log(error);
    })
    
  }
 

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Grid 
    minH={'100vh'} templateColumns={['1fr' , '5fr 1fr']}>
      
      <Container py={16}>
        <form action="" onSubmit={submitHandler}>
          <Heading textTransform={'uppercase'} children ='Create Blog' my={16} textAlign={['center' ,'left']}/>
           <VStack>
            <Input
              value={title}
              type='text'
              placeholder='Title of Blog'
              onChange={e=>setTitle(e.target.value)}
            />
            <Input
              value={description}
              type='text'
              placeholder='Description '
              onChange={e=>setDescription(e.target.value)}
            />
          
            <Select 
            value={category}
            onChange={e=>setCategory(e.target.value)}            
            >
            <option value={''}>Category</option>
            {
              categories && categories.map((item , index) =>(
                <option key={index} value={item.name}>{item.name} </option>
              ))
            }
            </Select>
            <Input 
            accept='image/*'
            type='file'
            css ={{
              '&::file-selector-button': {
                ...fileUploadCss,
              },            }}
            onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button w={'full'} isLoading = {loading}  colorScheme='cyan' type='submit'>
              Create
            </Button>
           </VStack>
        </form>
      </Container>
      
   
  <UserSidebar/>
<Toaster/>
   </Grid>
  )
}

export default CreateBlog
