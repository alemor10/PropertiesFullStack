import { 
    Box,
    Heading,
    SimpleGrid,

} from "@chakra-ui/react"
import { NextPage } from "next"
import * as React from "react"
import useSWR from 'swr'
import ContentCard from "../components/ContentCard"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"


import NextHead from '../components/NextHead'
import { useContentStore } from "../store/contentStore"



const Content: NextPage = () => {

    const state = useContentStore()

    console.log( state ) 

    return (
        <>
            <NextHead 
                currentURL="http://localhost:3000/Content" 
                description="Content" 
                title="Content" 
            />
            <Layout>
                <NavBar stringData= {state.headerData } /> 
                <Box 
                    as="header"
                    mb={8}
                    textAlign="center"
                >
                    <Heading 
                    as="h1"
                    fontSize="lg"
                    my={{base: 6, xl: 20}}
                    >
                        Content State/Componentss
                    </Heading>
                </Box>
                <SimpleGrid columns={2} spacing={10}>
                    <ContentCard  display= { !state.contentSwitch } text= {state.contentA }/>
                    <ContentCard  display= { state.contentSwitch } text= {state.contentB }/>
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default Content