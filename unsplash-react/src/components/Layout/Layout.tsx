import { Box, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Columns, ImageDimension } from '../../interfaces';
import { configureLayout } from '../../MasonryLayout/MasonryLayout';

const Layout = () => {
  const [links, setLinks] = useState([]);
  const [colOne, setColOne] = useState<any>([]);
  const [colTwo, setColTwo] = useState<any>([]);
  const [colThree, setColThree] = useState<any>([]);
  const colOneImgSize = {
    width: 385,
    height: 307
  };
  const colTwoImgSize = {
    width: 383,
    height: 583
  };

  useEffect(() => {
    fetch('https://localhost:7170/api/PhotoItem', {
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Access-Control-Allow-Origin': 'https://localhost:3000'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        // setLinks(res);
        const { one, two, three } = configureLayout(res, colOneImgSize, colTwoImgSize);
        setColOne(one);
        setColTwo(two);
        setColThree(three);
        // console.log(res);
      })
      .catch((err) => console.log(err + 'failed to fetch links'));
  }, []);

  return (
    <Box m={'25px'} display={'flex'} justifyContent={'center'}>
      <Box>
        {colOne.map((link: any, i: number) => (
          <Image
            src={link.link}
            key={link.id}
            alt={`${link.label}`}
            height={colOneImgSize.height}
            width={colOneImgSize.width}
            display={'block'}
            margin={'44px 22px'}
            borderRadius={'16px'}
          />
        ))}
      </Box>
      <Box>
        {colTwo.map((link: any, i: number) => (
          <Image
            src={link.link}
            key={link.id}
            alt={`${link.label}`}
            height={colTwoImgSize.height}
            width={colTwoImgSize.width}
            display={'block'}
            margin={'44px 22px'}
            borderRadius={'16px'}
          />
        ))}
      </Box>
      <Box>
        {colThree.map((link: any, i: number) => (
          <Image
            display={'block'}
            margin={'44px 22px'}
            borderRadius={'16px'}
            src={link.link}
            key={link.id}
            alt={`${link.label}`}
            height={i % 2 === 0 ? colOneImgSize.height : colTwoImgSize.height}
            width={i % 2 === 0 ? colOneImgSize.width : colTwoImgSize.width}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Layout;
