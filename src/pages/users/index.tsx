import { Header } from '@/components/Header';
import { Pagination } from '@/components/Pagination';
import { Sidebar } from '@/components/Sidebar';
import {Box, Flex, Heading, Button, Icon, Table, Thead, Th, Tr, Td, Checkbox, Tbody, Text} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';



export default function UserList() {
    return (

        <Box>
            <Header/>

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                 <Flex mb='8' justify='space-between' align='center' >
                    <Heading size='lg' fontWeight='normal'>
                        Usuários
                    </Heading>
                    <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine}/>}>
                        Criar novo usuário
                    </Button>
                 </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink'/>
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                <Th>
                                    Data de cadastro
                                </Th>
                                <Th>

                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Matheus de Arruda</Text>
                                        <Text fontSize='sm' color='gray.300' >matheusarrudaf@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>30 de junho, 2023</Td>
                                <Td>
                                     <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}>
                                        Editar
                                     </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>

            

        </Box>

    );
}