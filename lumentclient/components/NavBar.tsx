
import { Box,
    Button,
    Flex,
    Heading, 
    HStack, 
    IconButton, 
    Link, 
    List, 
    Text,    
    useColorMode,    
    useColorModeValue } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import { useContentStore } from "../store/contentStore"






interface INavBar { 
    stringData: string[]
}

const NavBar: React.FC<INavBar> = (
    props : INavBar,
) => {

    const { changeContent,contentSwitch  } = useContentStore()
    return (
        <Flex
            direction="column"
            position="relative"
            mb={6}
        >
            <Flex 
                as="nav"
                align="center"
                justify="space-between"
                py={[2, 3, 4, 6]}
                px={[2, 3, 4, 6]}
            >
                    {props.stringData.map((text: string) => (
                        <Box key= {text } as="nav">
                            { text }
                        </Box>
                    ))}

                    
                    <Box onClick= { changeContent } as="button">
                        <Box >
                            {contentSwitch ? '-' : '+'}
                        </Box>
                    </Box>


            </Flex>
        </Flex>

    )
}

export default NavBar