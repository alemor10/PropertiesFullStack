// Sample card from Airbnb

import * as React from "react"
import { Box, Image, Badge } from "@chakra-ui/react"
import { IPropertyResponse } from "../types/types"

interface PropertyProps {
  property: IPropertyResponse
}


const PropertyCard = (
    passedProperty : PropertyProps
) : React.ReactElement => {


    
      return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-547189,resizemode-1,msid-81426528/industry/services/property-/-cstruction/commercial-real-estate-firm-brookfield-properties-becomes-the-first-to-receive-bureau-veritas-safeguard-certification.jpg" />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              Property Name: { passedProperty.property.PROP_NAME }
            </Box>
            <Box d="flex" alignItems="baseline">
              ADDRESS: { passedProperty.property.ADDRESS }
            </Box>
            <Box d="flex" alignItems="baseline">
              City: {passedProperty.property.CITY}
            </Box>
            <Box d="flex" alignItems="baseline">
              State: {passedProperty.property.STATE}
            </Box>
          </Box>
        </Box>
      )
}

export default PropertyCard