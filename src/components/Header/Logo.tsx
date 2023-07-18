import { Text } from "@chakra-ui/react";

export default function DashLogo(){
    return (
        <Text fontSize='3xl' fontWeight='bold' letterSpacing='wider' w='64' >
             dashgo
         <Text as='span' ml='1' color='pink.500'>.</Text>
        </Text>
    );
}