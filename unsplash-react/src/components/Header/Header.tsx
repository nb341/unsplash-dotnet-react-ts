import { Box, Button, IconButton, Image, Input } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => (
  <Box>
    <Box>
      <Image />
      <Box>
        <Input />
        <IconButton icon={<FaSearch />} aria-label={'submit-search'} />
      </Box>
    </Box>
    <Button>Add a photo</Button>
  </Box>
);

export default Header;
