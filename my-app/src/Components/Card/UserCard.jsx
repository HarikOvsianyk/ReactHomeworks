import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PrimaryButton from '../Button/PrimaryButton';
import Typography from '@mui/material/Typography';

export const UserCard = () => {
  return (
    <Card sx={{ width: 180,
                m:2,
                textAlign: "center",
                alignItems: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <PrimaryButton>Learn More</PrimaryButton>
      </CardActions>
    </Card>
  );
}