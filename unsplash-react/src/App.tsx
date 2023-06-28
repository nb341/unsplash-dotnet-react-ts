import { ReactNode, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Spinner,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { usePhotos } from "./contexts/PhotoState";
import { usePhotosContext } from "./contexts/photoContext";

// import { ActionType } from "./contexts/PhotoReducer";
interface IRendererProps {
  loading: boolean;
  error: string | null;
  items: any[];
}

function PhotosRenderer({ loading, error, items }: IRendererProps) {
  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>An error occurred: {error}</Box>;
  return <Layout images={items} />;
}

function App() {
  //const [photos] = usePhotos();
  const { state, dispatch } = usePhotosContext();

  return (
    <ChakraProvider theme={theme}>
      <Box mx={"98px"} my={"32px"} border={"red solid 1px"}>
        <Header />
        <PhotosRenderer
          loading={state.isLoading}
          error={state.error}
          items={state.photos}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
