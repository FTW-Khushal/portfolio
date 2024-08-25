import React, { useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import beepSound from '../assets/audioMP3/khushal_khunt.mp3';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Box } from '@mui/material';

const PronunciationButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <Box
      sx={{ display: 'inline-block', verticalAlign: 'text-bottom' }}
    >
      <IconButton
      size='small'
        onClick={playAudio}
        className="bg-gray-300 hover:bg-gray-400 text-white rounded-full p-4"
        aria-label="Play pronunciation"
        sx={{ display: 'inline-flex', verticalAlign: 'middle'}}
      >
        {isPlaying ? <GraphicEqRoundedIcon className="wave-icon" /> : <VolumeUpRoundedIcon />}
      </IconButton>
      <audio
        ref={audioRef}
        id="myAudio"
        src={beepSound}
        onEnded={handleEnded}
      />
    </Box>
  );
};

export default PronunciationButton;
