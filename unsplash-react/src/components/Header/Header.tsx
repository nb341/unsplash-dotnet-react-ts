import { Box, Button, Flex, IconButton, Image, Input } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => (
  <Box>
    <Flex>
      <Image src="" />
      <Box>
        <Input _focus={{ border: '1px solid #333', boxShadow: 'md' }} />
        <IconButton variant={'ghost'} icon={<FaSearch />} aria-label={'submit-search'} />
      </Box>
    </Flex>
    <Button>Add a photo</Button>
  </Box>
);

export default Header;
