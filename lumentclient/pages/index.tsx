import { Box, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import NextLink from "next/link";

import Layout from '../components/Layout'
import NextHead from '../components/NextHead'

const Home: NextPage = () =>  {
  return (
    <>
    <NextHead 
      currentURL="http://localhost:3000" 
      description="=Lument" 
      title="Lument" 
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
            Lument Code
          </Heading>
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          <NextLink 
              href="/Content" 
              passHref
            >
              <Link 
                alignItems="center" 
                display="flex"
                fontSize="lg"
              >
                  <Box alignSelf="center" as="button"> 
                    To Content
                  </Box>
              </Link>
            </NextLink>
            <NextLink 
              href="/Properties" 
              passHref
            >
              <Link 
                alignItems="center" 
                display="flex"
                fontSize="lg"
              >
                  <Box alignSelf="center" as="button"> 
                    To Properties
                  </Box>
              </Link>
            </NextLink>
          </SimpleGrid>
      </Layout>
    </>
  )
}

export default Home 