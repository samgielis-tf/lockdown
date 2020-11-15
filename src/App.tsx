import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { GameView } from "./components/GameView"
import { game } from "./data/game"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" background="gray.900" color="green.400">
      <Grid minH="100vh" p={10}>
        <VStack spacing={8}>
          <GameView game={game} />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
