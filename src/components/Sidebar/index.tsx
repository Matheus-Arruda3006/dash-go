import { Stack, Box, } from "@chakra-ui/react"
import NavSection from './NavSection'
import NavLink from "./NavLink"
import { RiDashboardLine } from "react-icons/ri"
import { RiContactsLine } from "react-icons/ri"
import { RiInputMethodLine } from "react-icons/ri"
import { RiGitMergeLine } from "react-icons/ri"


export function Sidebar(){

    return(
        <Box as='aside' w='64' mr='8'>
             <Stack spacing='12' align='flex-start'>
                <NavSection title="GERAL">
                       <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
                       <NavLink icon={RiContactsLine} href='/users'>Usuários</NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                      <NavLink icon={RiInputMethodLine} href='/form'>Formulários</NavLink>
                      <NavLink icon={RiGitMergeLine} href='automation'>Automação</NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}