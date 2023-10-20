import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Image, Button, Container, Grid, Heading, Input, VStack } from '@chakra-ui/react'
import { fileUploadCss } from '../../Auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../../redux/actions/category'
import toast, { Toaster } from 'react-hot-toast'


const CreateCategory = () => {

  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [image , setImage] = useState('');
  const [ previewImage , setPreviewImage] = useState('');


  const setProfile = (e) => {
    setImage(e.target.files[0])
  }

  useEffect(()=>{
    if(image){
      setPreviewImage(URL.createObjectURL(image))
    }
  } ,[image]);

  const { loading , error , message  } = useSelector(state => state.category)
  const dispatch = useDispatch() ;

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

  const submitHandler = e =>{

    e.preventDefault();

    const myData = new FormData()

    myData.append('name' ,title);
    myData.append('description' ,description);
    myData.append('file' ,image);

    dispatch(createCategory(myData))
    .then(()=>{
      setTitle('');
      setDescription('');
      setImage('');
      setPreviewImage('');
    })
  }
  return (
    <Grid 
    minH={'100vh'} templateColumns={['1fr' , '5fr 1fr']}>
      <Container  py={16}>
         <form onSubmit={submitHandler} action="">
          <Heading textTransform={'uppercase'} children={"Create Category"} my={16}  textAlign={['center' ,'left']}/>
          <VStack m={'auto'} spacing={8}>
            <Input
            value={title}
            onChange={e=>setTitle(e.target.value)}
            type='text'
            placeholder='Title ....'
            /> {' '}
            <Input
            value={description}
            onChange={e=>setDescription(e.target.value)}
            type='text'
            placeholder='Description ....'
            /> {' '}
           
            <Input 
            accept='image/*'
            type='file'
            css ={{
              '&::file-selector-button': {
                ...fileUploadCss,
              },            }}
            onChange={setProfile}
            />
            {previewImage && (
              <Image src={previewImage} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button  isLoading = {loading} w={'full'} colorScheme='cyan' type='submit'>
              Create
            </Button>
          </VStack>
        <Toaster/>
         </form>
      </Container>
   <Sidebar/>

   </Grid>
  )
}

export default CreateCategory
