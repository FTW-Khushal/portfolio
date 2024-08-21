import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#d3e97a',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 'bold',
  color: '#000',
  '&:hover': {
    backgroundColor: '#c7e068',
  },
}));

const CTAButton = ({ text, icon: Icon }) => {
  return (
    <CustomButton>
      <span className="flex items-center justify-between w-full">
        <span className="ml-4 mr-3">{text}</span>
        <span className="hidden md:block mx-3 my-3 w-3 h-3 bg-black rounded-full"></span>
        <span className="md:hidden bg-black rounded-full p-[8px]">
          {Icon && <Icon className='text-white text-xl' />}
        </span>
      </span>
    </CustomButton>
  );
};

export default CTAButton;
