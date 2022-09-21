import { Box, Button, Flex, Icon, IconButton, Image, Input } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/my_unsplash_logo.svg';
const Header = () => (
  <Box display={'flex'} justifyContent="space-around" marginTop={'32px'}>
    <Flex>
      <Image src={Logo} ml={'28px'} htmlHeight={'43px'} htmlWidth={'99px'} />
      <Box display={'flex'} position="relative" justifyContent={'center'} alignItems="center">
        <Input
          type={'text'}
          height={'55px'}
          width={'300px'}
          paddingLeft={'70px'}
          _focus={{ border: '0.5px solid rgba(189, 189, 189, 1)', boxShadow: 'md' }}
        />
        <IconButton
          position="absolute"
          left="0"
          variant={'ghost'}
          icon={
            <Icon color={'rgba(189, 189, 189, 1)'} height={'17px'} width={'17px'} as={FaSearch} />
          }
          aria-label={'submit-search'}
          zIndex={1}
          width="55px"
          height={'55px'}
        />
      </Box>
    </Flex>
    <Button
      color={'rgba(255, 255, 255, 1)'}
      boxShadow={'0px 1px 6px rgba(0, 0, 0, 0.1)'}
      bgColor={'rgba(61, 180, 109, 1)'}
      fontSize={'16px'}
      fontWeight={'700'}
      height={'55px'}
      width={'137px'}>
      Add a photo
    </Button>
  </Box>
);

export default Header;
