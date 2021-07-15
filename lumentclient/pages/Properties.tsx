import { 
    Box,
    Heading,
    Wrap,
    WrapItem,
    Center,
    SimpleGrid,
    useQuery,
    Link,
} from "@chakra-ui/react"
import { NextPage } from "next"
import * as React from "react"
import { useState } from "react"
import useSWR from 'swr'
import Layout from "../components/Layout"
import NextLink from "next/link";

import NextHead from '../components/NextHead'
import PropertyCard from "../components/PropertyCard"
import { fetcher } from '../libs/fetch';
import { IPropertyResponse } from "../types/types"




const Properties: NextPage = () => {

    const { data, error } = useSWR(
        "http://localhost:4000/Properties/data",
        fetcher
    );

    const [showData, setShowData] = useState(false);

    const displayData = () => {
        setShowData(true);
    };


    if(error) {
        return <div>Error....</div>
    }
    if(!showData) {
        return <div>
            <button type="button" onClick={() => displayData() }>Show Data</button>
        </div>
    }

    return (
        <>
            <NextHead 
                currentURL="http://localhost:3000/Properties" 
                description="Properties" 
                title="Properties" 
            />
            <Layout>
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
                        Properties
                    </Heading>
                    <NextLink 
                        href="/Content" 
                        passHref
                    >
                        <Link 
                            alignItems="center" 
                            display="flex"
                            fontSize="lg"
                        >
                            <Box as="button"> 
                                To Component
                            </Box>
                        </Link>

                    </NextLink>
                </Box>
                <SimpleGrid columns={3} spacing={10}>
                    {data.map((property: IPropertyResponse, index: number) => (
                        // eslint-disable-next-line react/jsx-key
                        <Center>
                            <PropertyCard key={index} property={ property } />
                        </Center>
                    ))}
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default Properties