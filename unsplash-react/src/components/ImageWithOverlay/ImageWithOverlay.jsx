import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
const ImageWithOverlay = ({
  imgSrc,
  imgHeight,
  imgWidth,
  imgTitle,
  deleteFunc,
}) => {
  return (
    <Box
      borderRadius={"24px"}
      height={imgHeight}
      width={imgWidth}
      position="relative"
      marginTop={"46px"}
    >
      <Image
        borderRadius={"16px"}
        src={imgSrc}
        alt={imgTitle}
        w="100%"
        h="100%"
        objectFit={"cover"}
      />
      <Box
        borderRadius={"16px"}
        position={"absolute"}
        bottom={"0"}
        left={"0"}
        background={"rgb(0, 0, 0)"}
        transition={".5s ease"}
        opacity={0}
        textAlign={"center"}
        height="100%"
        width="100%"
        _hover={{
          opacity: 1,
          background: "rgba(0, 0, 0, 0.38)" /* Black see-through */,
          height: "100%",
          width: "100%",
          borderRadius: "16px",
        }}
      >
        <Button
          color={"#EB5757"}
          variant={"ghost"}
          border={"1px solid #EB5757"}
          boxSizing={"border-box"}
          borderRadius={"38px"}
          position={"absolute"}
          top={5}
          right={10}
          px={6}
          py={2}
          onClick={(e) => {
            deleteFunc();
          }}
        >
          delete
        </Button>
        <Text
          textColor={"white"}
          fontWeight={700}
          fontSize={"18px"}
          position={"absolute"}
          bottom={5}
          left={10}
        >
          {imgTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default ImageWithOverlay;
