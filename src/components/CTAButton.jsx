import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#d3e97a', // Background color similar to your image
  borderRadius: '50px', // Rounded corners
  textTransform: 'none', // To keep the text as it is
  fontWeight: 'bold',
  color: '#000',
  '&:hover': {
    backgroundColor: '#c7e068', // Slightly darker shade on hover
  },
}));

const CTAButton = () => {
  return (
    <CustomButton>
      <span className="flex items-center justify-between w-full">
        <span className="ml-4 mr-3">CONTACT ME</span>
        <span className="hidden md:block mx-3 my-3 w-3 h-3 bg-black rounded-full"></span> {/* The circle */}
        <span className="md:hidden bg-black rounded-full p-[8px]"><ArrowOutwardIcon className='text-white text-xl' /></span> {/* The arrow */}
      </span>
    </CustomButton>
  );
};

export default CTAButton;
