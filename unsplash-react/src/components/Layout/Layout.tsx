import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Columns, ImageDimension, Photo } from "../../interfaces";
import { configureLayout } from "../../MasonryLayout/MasonryLayout";
import ImageWithOverlay from "../ImageWithOverlay/ImageWithOverlay";
import { usePhotosContext } from "../../contexts/photoContext";

const Layout = ({ images = [] }: any) => {
  const { deletePhoto } = usePhotosContext();
  const [links, setLinks] = useState([]);
  const [colOne, setColOne] = useState<Photo[]>([]);
  const [colTwo, setColTwo] = useState<Photo[]>([]);
  const [colThree, setColThree] = useState<Photo[]>([]);
  const colOneImgSize = {
    width: 381,
    height: 307,
  };
  const colTwoImgSize = {
    width: 381,
    height: 583,
  };

  useEffect(() => {
    // fetch("https://localhost:7170/api/PhotoItem", {
    //   mode: "cors", // no-cors, *cors, same-origin
    //   headers: {
    //     "Access-Control-Allow-Origin": "https://localhost:3000",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     // setLinks(res);
    //     const { one, two, three } = configureLayout(
    //       res,
    //       colOneImgSize,
    //       colTwoImgSize
    //     );
    //     setColOne(one);
    //     setColTwo(two);
    //     setColThree(three);
    //     // console.log(res);
    //   })
    //   .catch((err) => console.log(err + "failed to fetch links"));
    if (images.length > 0) {
      const { one, two, three } = configureLayout(
        images,
        colOneImgSize,
        colTwoImgSize
      );
      setColOne(one);
      setColTwo(two);
      setColThree(three);
    }
  }, [images]);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box marginRight={"44px"}>
        {colOne.map((link: any, i: number) => (
          <ImageWithOverlay
            imgSrc={link.link}
            key={link.id}
            imgHeight={colOneImgSize.height}
            imgWidth={colOneImgSize.width}
            imgTitle={link.label}
            deleteFunc={deletePhoto}
            photoId={link.id}
          />
        ))}
      </Box>
      <Box marginRight={"44px"}>
        {colTwo.map((link: any, i: number) => (
          <ImageWithOverlay
            imgSrc={link.link}
            key={link.id}
            imgHeight={colTwoImgSize.height}
            imgWidth={colTwoImgSize.width}
            imgTitle={link.label}
            deleteFunc={deletePhoto}
            photoId={link.id}
          />
        ))}
      </Box>
      <Box>
        {colThree.map((link: any, i: number) => (
          <ImageWithOverlay
            imgSrc={link.link}
            key={link.id}
            imgTitle={`${link.label}`}
            imgHeight={
              i % 2 === 0 ? colOneImgSize.height : colTwoImgSize.height
            }
            imgWidth={i % 2 === 0 ? colOneImgSize.width : colTwoImgSize.width}
            deleteFunc={deletePhoto}
            photoId={link.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Layout;
