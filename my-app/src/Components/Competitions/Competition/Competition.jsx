import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import Typography from '@mui/material/Typography';
import {useHistory} from 'react-router-dom';


export const Competition = ({competition}) => {
  const history = useHistory();
  let status = '';
  if (competition.status === true) {
    status = 'finished';
  } else {
    status = 'active';
  }
  return (
    <Card sx={{ width: 180,
                m:2,
                textAlign: "center",
                alignItems: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID : {competition.id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name : {competition.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Status : {status}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Winner : {competition.winner}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <PrimaryButton onClick={() => history.push(`/competition/${competition.id}`)}>Show</PrimaryButton>
      </CardActions>
    </Card>
  );
};

export default Competition;