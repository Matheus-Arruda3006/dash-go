import { Flex, HStack, Icon, Box, Text, Avatar } from "@chakra-ui/react";
import { RiUserAddLine } from "react-icons/ri";
import { RiNotificationLine } from "react-icons/ri";

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({showProfileData = true}: ProfileProps){
    return (
        <Flex align='center' ml='auto'>
                <HStack spacing={['6', '8']} mx={['6', '8']} pr={['6', '8']} py='1' color='gray.300' borderRightWidth={1} borderColor='gray.700'>
                     <Icon as={RiNotificationLine}/>
                     <Icon as={RiUserAddLine}/>
                </HStack>
                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>Matheus de Arruda</Text>
                        <Text color='gray.300' fontSize='small'>matheusarrudaf@gmail.com</Text>
                    </Box>
                    <Avatar size='md' src='https://github.com/Matheus-Arruda3006.png'/>
                </Flex>
            </Flex>
    );
}