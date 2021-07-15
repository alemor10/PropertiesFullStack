// Sample card from Airbnb

import * as React from "react"
import { Box, Image, Badge } from "@chakra-ui/react"



interface ContentProps {
    // color: string
    text: string
    display: boolean
    //course: ICourse
}

const ContentCard = (
    content  : ContentProps
) : React.ReactElement => {

    
    let color = ''

    if ( content.display ) {
      color = '#FFFFFF'
    }
    else {
      color = '#E2E8F0'
    }
    
    return (
      <Box background={ color } h="500px"  w="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
          {content.display === true && 
            <Box borderRadius="full" color="gray.600"  px="2" colorScheme="teal">
              { content.text }
            </Box>
          }
      </Box>
    )
}

export default ContentCard