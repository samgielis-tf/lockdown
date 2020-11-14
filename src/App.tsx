import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import Countdown from "react-countdown"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text fontSize="6xl">
            <Countdown date={"Nov 15, 2020 19:30:00"} />
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
