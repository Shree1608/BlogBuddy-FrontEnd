import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';


const Links = ({ url = '/', title = 'Home' ,onClose }) => (
    <Link  onClick={onClose} to={url}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)
const Header = ({ isAuthenticated ,user }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
     const dispatch = useDispatch();
    const logoutHandler =() =>{
        onClose() ;
        dispatch(logout())
    }
    
    return (
        <div>
            <Button
                rounded='full'
                width={'12'}
                height={'12'}
                colorScheme={'cyan'}
                position={'fixed'}
                top={'6'}
                left={'6'}
                onClick={onOpen}
            >
                <RiMenu5Fill />
                <Drawer
                    placement='left'
                    onClose={onClose}
                    isOpen={isOpen}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth={'1px'} >BlogMasterCMT</DrawerHeader>
                        <DrawerBody>
                            <VStack alignItems={'flex-start'} spacing={4}>
                                <Links onClose={onClose} url='/' title='Home' />
                                <Links onClose={onClose} url='/about' title='About ' />
                                <Links onClose={onClose} url='/blogs' title='All Blogs' />
                                <Links onClose={onClose} url='/contact' title='Contact Us' />

                                <HStack justifyContent={'space-evenly'}
                                    position={'absolute'}
                                    bottom={'2rem'}
                                    width="80%"
                                >
                                    {isAuthenticated ?
                                        (<>
                                            <VStack>
                                                <HStack>
                                                    <Link onClick={onClose} to={'/profile'}>
                                                        <Button variant={'ghost'} colorScheme='cyan'>Profile</Button>
                                                    </Link>
                                                    <Button onClick={logoutHandler} variant={'ghost'} >
                                                        <RiLogoutBoxLine />
                                                        Logout
                                                    </Button>
                                                </HStack>
                                                {
                                                    user && user.role === 'admin' ? (
                                                        <>
                                                            <Link onClick={onClose} to={'/admin/dashboard'}>
                                                                <Button>
                                                                    <RiDashboardFill style={{ margin: '4px' }} />
                                                                    Dashboard
                                                                </Button>
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Link onClick={onClose} to={'/user/myblogs'}>
                                                                <Button>
                                                                    <RiDashboardFill style={{ margin: '4px' }} />
                                                                    Your Blogs
                                                                </Button>
                                                            </Link>
                                                        </>
                                                    )

                                                }
                                            </VStack>
                                        </>
                                        ) :
                                        (
                                            <>
                                                <Link to={'/login'}>
                                                    <Button colorScheme='cyan'>Login</Button>
                                                </Link>
                                                <p>OR</p>
                                                <Link to={'/register'}>
                                                    <Button colorScheme='cyan'>Sign Up</Button>
                                                </Link>
                                            </>)}
                                </HStack>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Button>
        </div>
    )
}

export default Header
