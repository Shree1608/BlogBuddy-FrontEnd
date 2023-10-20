import React , { useEffect, useState } from 'react'
import { Box, Button, Container, FormLabel, Heading, Input, Link, VStack , Avatar} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/user'

export const fileUploadCss = {
  cursor :'pointer' , marginLeft : "-5%",
  width :'110%',
  border : "none" ,
  color : 'darkcyan' ,
  backgroundColor : 'white'
}
const fileUploadeStyle =  {
  "&::file-selector-button":fileUploadCss
}
const Register = () => {
    const [ name , setName] = useState('');  
    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('');
    const [ image , setImage] = useState('');
    const [ previewImage , setPreviewImage] = useState('');

    // const changImageHandler =(e)=>{
    //   const file = e.target.files[0];
    //   const reader = new FileReader();

    //   reader.readAsDataURL(file);
    //   reader.onloadend = () =>{
    //     setPreviewImage(reader.result)
    //   }
    // }

    const dispatch = useDispatch() ;
    const setProfile = (e) => {
      setImage(e.target.files[0])
    }

    useEffect(()=>{
      if(image){
        setPreviewImage(URL.createObjectURL(image))
      }
    } ,[image]);


    const submitHandler = e => {
      e.preventDefault();
      const myForm = new FormData();
  
      myForm.append('name', name);
      myForm.append('email', email);
      myForm.append('password', password);
      myForm.append('file', image);
  
      dispatch(register(myForm));
    };
  return (
    <div>
      <Container height={'100vh'}>
        <VStack h={'full'}  justifyContent='center' spacing={'16'}>
            <Heading children ={'REGISTRATION'}/>
            
            <form onSubmit={submitHandler}  action="" style={{width :'100%'}}>
                <Box  display={'flex'} justifyContent={'center '}>
                <Avatar src={ previewImage }   size={'xl'}/>
                </Box>
                <Box>
                <FormLabel  htmlFor='name' children ={'Enter your Name'}/>
                <Input 
                required 
                id='name' 
                value={name} 
                onChange={(e =>setName(e.target.value))}
                placeholder='Full name'
                type='name'
                focusBorderColor='cyan.600'
                />
              </Box>
              <Box my={2}>
                <FormLabel  htmlFor='email' children ={'Enter your email'}/>
                <Input 
                required 
                id='email' 
                value={email} 
                onChange={(e =>setEmail(e.target.value))}
                placeholder='abc@gmail.com'
                type='email'
                focusBorderColor='cyan.600'
                />
              </Box>
                <FormLabel  htmlFor='password' children ={'Enter your Password'}/>
                <Input 
                required 
                id='password' 
                value={password} 
                onChange={(e =>setPassword(e.target.value))}
                placeholder='Password ....'
                type='password'
                focusBorderColor='cyan.600'
                />
                <Box>
                <Box my={2}>
                <FormLabel  htmlFor='image' children ={'Set your Profile'}/>
                <Input 
                required 
                id='avtar' 
                accept='image/*'
                onChange={setProfile}
                type='file'
                css ={fileUploadeStyle}
                
                />
              </Box>
                </Box>
               
                <Button my={'4'} colorScheme='cyan' type='submit' >Sign up</Button>
                <Box>
                    Alredy Register ? <Link to = {'/login'}>
                    <Button colorScheme='cyna' variant={'link'}>Login</Button>{ " "}here
                    </Link>
                </Box>
            </form>
        </VStack>
      </Container>
    </div>
  )
}

export default Register
