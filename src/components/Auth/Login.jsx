import { Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user';
const Login = () => {

    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('')

    console.log(email);
    const dispatch = useDispatch()
    const submitHandler =  (e) =>{
      e.preventDefault();

      try {
        const userData = {
          email : email ,
          password : password
        }
        console.log('submit' , email , password);
         dispatch(login(userData)); 
      } catch (error) {
        alert('error')
      }
    }
  return (
    <div>
      <Container height={'80vh'}>
        <VStack h={'full'}  justifyContent='center' spacing={'16'}>
            <Heading children ={'welcom to login'}/>
            <form onSubmit={submitHandler} action="" style={{width :'100%'}}>
                <Box>
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
                <FormLabel my={4} htmlFor='password' children ={'Enter your Password'}/>
                <Input 
                required 
                id='password' 
                value={password} 
                onChange={(e =>setPassword(e.target.value))}
                placeholder='Password ....'
                type='password'
                focusBorderColor='cyan.600'
                />
                </Box>
                <Box>
                <Link to ={ '/forgetPassword'}>
                    <Button fontSize={'sm'} variant={'link'}>
                        Forget Password
                    </Button>
                </Link>
                </Box>
                <Button my={'4'} colorScheme='cyan' type='submit' >Login</Button>
                <Box>
                    New User ? <Link to={'/register'}>
                    <Button colorScheme='cyna' variant={'link'}>Sign up</Button>{ " "}here
                    </Link>
                </Box>
            </form>
        </VStack>
      </Container>
    </div>
  )
}

export default Login
