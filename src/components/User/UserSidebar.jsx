import { Button, VStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom' ;
import { AiOutlineAppstoreAdd } from 'react-icons/ai' ;
import { BiBookContent } from 'react-icons/bi'
const UserSidebar = () => {

  return (
    <div>
      <VStack h={'full'} spacing={'8'} p={['10' ,'20']} boxShadow={'-2px 0 10px rgba(107 ,70,193,0.5)'}>
        <LinkButton url={'user/blog/add'} text={'Create Blog'} Icon={AiOutlineAppstoreAdd}/>
        <LinkButton url={'user/myblogs'} text={'My Blogs'} Icon={BiBookContent}/>
      </VStack>
    </div>
  )
}

export default UserSidebar

export const LinkButton =({url , Icon , text , active}) =>{
    return(
        <Link to= {`/${url}`}>
          <Button fontSize={'larger'} variant={'ghost'} colorScheme={active ? "blue":''}>
            <Icon style={{margin : '4'}}/>
            {text}
          </Button>
        </Link>
    )
}