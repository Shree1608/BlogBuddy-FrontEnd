import { Button, VStack ,Stack} from '@chakra-ui/react'
import React from 'react';
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom' ;
import { AiOutlineAppstoreAdd } from 'react-icons/ai' ;
import { BiBookContent } from 'react-icons/bi'
const Sidebar = () => {
    const location = useLocation();
  return (
    <div>
      <VStack h={'full'} spacing={'8'} p={['10' ,'20']} boxShadow={'-2px 0 10px rgba(107 ,70,193,0.5)'}>
        <LinkButton url={'admin/dashboard'} Icon ={RiDashboardFill} text={'Dashboard'} active={location.pathname ==='admin/dashboard'} />
        <LinkButton url={'admin/category'} text={'Create category'} Icon={RiAddCircleFill}/>
        <LinkButton url={'admin/category/all'} text={'Categories'} Icon={RiEyeFill}/>
        <LinkButton url={'admin/blog/add'} text={'Create Blog'} Icon={AiOutlineAppstoreAdd}/>
        <LinkButton url={'admin/myblogs'} text={'My Blogs'} Icon={BiBookContent}/>
        <LinkButton url={'admin/users'} text={'Users'} Icon={RiUser3Fill} />
      </VStack>
    </div>
  )
}

export default Sidebar

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