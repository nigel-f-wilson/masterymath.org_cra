import React from "react";

// THIRD PARTY
import { Stack, Avatar, Typography } from '@mui/material';

// INTERNAL

export default function ProfileSummary(props) {
  // const { user, isAuthenticated } = useAuth0();
  const { name, email, picture } = props.user

  console.log(`USER: ${JSON.stringify(props.user,null,4)}`);

  return (
    <>
      <Avatar
        src={picture}
        alt={name}
        sx={{ width: 60, height: 60, marginX: '15px' }}
      />
      <Stack  display='flex' flexDirection='column'  justifyContent='center' py='10px' >
        <Typography variant='h4' children={name} />
        <Typography variant='body1' children={email} />
      </Stack>
    </>
  );
};