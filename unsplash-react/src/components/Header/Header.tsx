import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/my_unsplash_logo.svg";
import ModalComponent from "../Modal/ModalComponent";
const Header = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7170/api/PhotoItem", {
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // setLinks(res);
        setPhotos(res);
        // console.log(res);
      })
      .catch((err) => console.log(err + "failed to fetch links"));
  }, []);

  const [searchValue, setSearchValue] = useState("");

  return (
    <Box display={"flex"} justifyContent="space-between">
      <Flex alignItems={"center"}>
        <Image src={Logo} h={"26px"} w={"128px"} />
        <Box ml={"24px"}>
          <Box
            display={"flex"}
            position="relative"
            justifyContent={"center"}
            alignItems="center"
            w="300px"
            h="55px"
          >
            <Input
              type={"text"}
              height={"55px"}
              width={"300px"}
              paddingLeft={"70px"}
              borderRadius={"12px"}
              value={searchValue}
              _focus={{
                border: "0.5px solid rgba(189, 189, 189, 1)",
                boxShadow: "md",
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <IconButton
              position="absolute"
              left="0"
              variant={"ghost"}
              icon={
                <Icon
                  color={"rgba(189, 189, 189, 1)"}
                  height={"17px"}
                  width={"17px"}
                  as={FaSearch}
                />
              }
              aria-label={"submit-search"}
              zIndex={1}
              width="55px"
              height={"55px"}
            />
          </Box>
        </Box>
      </Flex>
      <ModalComponent />
    </Box>
  );
};

export default Header;
