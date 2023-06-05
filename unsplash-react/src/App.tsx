import { useEffect } from "react";
import { ChakraProvider, Box, theme, Button } from "@chakra-ui/react";
import { Action, ActionType } from "./contexts/PhotoReducer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import ImageWithOverlay from "./components/ImageWithOverlay/ImageWithOverlay";
// import { PhotosProvider, usePhotos, getPhotos } from "./contexts/PhotoContext";
import { Photo } from "./interfaces";
import { StateProvider, usePhotos } from "./contexts/PhotoState";

interface IRendererProps {
  loading: boolean;
  error: string | null;
  items: any[];
}

function PhotosRenderer({ loading, error, items }: IRendererProps) {
  console.log(items);
  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>An error occurred: {error}</Box>;
  return <Layout images={items} />;
}

function App() {
  const { state, dispatch } = usePhotos();
  const { isLoading, photos, error } = state;
  useEffect(() => {
    dispatch({ type: ActionType.LOAD_PHOTOS });
    fetch("https://localhost:7170/api/PhotoItem", {
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // setLinks(res);

        dispatch({ type: ActionType.ADD_PHOTOS, payload: res });
        console.log(res);
      })
      .catch((err) =>
        dispatch({
          type: ActionType.ERROR,
          payload: err + "failed to fetch links",
        })
      );
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <StateProvider>
        <Box>
          <Header />
          <PhotosRenderer loading={isLoading} error={error} items={photos} />
        </Box>
      </StateProvider>
    </ChakraProvider>
  );
}

export default App;
