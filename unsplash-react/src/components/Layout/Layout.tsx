import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Columns } from '../../interfaces';
import { configureLayout } from '../../MasonryLayout/MasonryLayout';

const Layout = () => {
  const links = [
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  ];
  const colOneImgSize = {
    width: 385,
    height: 307
  };
  const colTwoImgSize = {
    width: 383,
    height: 583
  };
  const { one, two, three }: Columns = configureLayout(links, colOneImgSize, colTwoImgSize);
  return (
    <Box m={'25px'} display={'flex'} justifyContent={'center'}>
      <Box>
        {one.map((link: string, i: number) => (
          <Image
            src={link}
            key={i + 1}
            alt={`${i}`}
            height={colOneImgSize.height}
            width={colOneImgSize.width}
            display={'block'}
            margin={'44px 22px'}
            borderRadius={'16px'}
          />
        ))}
      </Box>
      <Box>
        {' '}
        {two.map((link, i) => (
          <Image
            src={link}
            key={i + 2}
            alt={`${i}`}
            height={colTwoImgSize.height}
            width={colTwoImgSize.width}
            display={'block'}
            margin={'44px 22px'}
            borderRadius={'16px'}
          />
        ))}
      </Box>
      <Box>
        {three.map((link, i) => (
          <Image
            display={'block'}
            margin={'44px 22px'}
            borderRadius={'16px'}
            src={link}
            key={i + 3}
            alt={`${i}`}
            height={i % 2 === 0 ? colOneImgSize.height : colTwoImgSize.height}
            width={i % 2 === 0 ? colOneImgSize.width : colTwoImgSize.width}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Layout;
