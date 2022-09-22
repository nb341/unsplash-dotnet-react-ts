import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/my_unsplash_logo.svg';
import ModalComponent from '../Modal/ModalComponent';
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
    <ModalComponent />
  </Box>
);

export default Header;
