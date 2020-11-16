import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { GameView } from "./components/GameView"
import { game } from "./data/game"
import ReactGA from 'react-ga';

export const App = () => {
  ReactGA.initialize('G-EM7EKGSY32');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" background="gray.900" color="green.400">
        <GameView game={game} />
      </Box>
    </ChakraProvider>
  );
}
