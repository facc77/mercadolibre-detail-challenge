import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../../router/AppRouter';

const Review = ({ review }) => {
  const theme = useContext(ThemeContext);
  const [likes, setLikes] = useState(review.likes);
  const [likeIconFilled, setLikeiconFilled] = useState(false);
  const [dislikes, setDislikes] = useState(review.dislikes);
  const [dislikeIconFilled, setDislikeiconFilled] = useState(false);

  const handleLike = () => {
    setLikes(review.likes + 1);
    setLikeiconFilled(true);
    setDislikes(review.dislikes);
    setDislikeiconFilled(false);
  };

  const handleDislike = () => {
    setLikes(review.likes);
    setDislikes(review.dislikes + 1);
    setDislikeiconFilled(true);
    setLikeiconFilled(false);
  };

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#3483fa',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  const likesStyle = {
    color: theme ? '#fff' : 'rgba(0,0,0,.9)',
    marginRight: '0.5rem',
    cursor: 'pointer',
  };

  return (
    <Box sx={{ width: '100%', marginTop: '2rem' }}>
      <StyledRating
        name='read-only'
        value={parseInt(review.rating, 10)}
        readOnly
        size='medium'
      />
      <Typography sx={{ fontWeight: 500, color: theme ? '#fff' : '#000' }}>
        {review.title}
      </Typography>
      <Typography sx={{ color: theme ? '#fff' : '#000' }}>
        {review.comments}
      </Typography>
      <Box sx={{ display: 'flex', mt: '0.5rem' }}>
        {likeIconFilled ? (
          <ThumbUpAltRoundedIcon
            style={likesStyle}
            onClick={() => handleLike()}
          />
        ) : (
          <ThumbUpOffAltOutlinedIcon
            style={likesStyle}
            onClick={() => handleLike()}
          />
        )}
        <Typography style={likesStyle}>{likes}</Typography>
        {dislikeIconFilled ? (
          <ThumbDownAltRoundedIcon
            style={likesStyle}
            onClick={() => handleDislike()}
          />
        ) : (
          <ThumbDownOutlinedIcon
            style={likesStyle}
            onClick={() => handleDislike()}
          />
        )}
        <Typography style={likesStyle}>{dislikes}</Typography>
      </Box>
    </Box>
  );
};

export default Review;
