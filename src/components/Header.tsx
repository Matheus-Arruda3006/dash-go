import {Flex, Text, Input, Icon, HStack, Box, Avatar, useBreakpointValue} from '@chakra-ui/react'
import {RiSearchLine, RiNotificationLine, RiUserAddLine} from 'react-icons/ri'
import Profile from './Header/Profile'
import SearchBox from './Header/SearchBox'
import DashLogo from './Header/Logo'

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (
       <Flex as='header' w='100%' maxWidth={1480} h='20' mx='auto' mt='4' px='6' align='center'  > 
            <DashLogo/>
            <SearchBox/>
            <Profile showProfileData={isWideVersion}/>
       </Flex> 
    )
}