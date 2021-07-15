import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import NavBar from "./NavBar";


interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    return (
        <Flex 
        as="div"
        direction="column"
        justify="space-between"
        minH="100vh"
        >
            <Box 
                as="main"
                flex="1"
                px={router.pathname !== "/" ? "2vw" : 0}
            >
                {children}
            </Box>

        </Flex>
    )
}


export default Layout;