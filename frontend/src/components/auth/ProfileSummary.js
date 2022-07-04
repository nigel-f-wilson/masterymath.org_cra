import React, { useContext } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Box, Stack, Avatar, Typography } from '@mui/material';

import { SettingsContext } from "../../contexts";

export default function ProfileSummary(props) {
  const { user, isAuthenticated } = useAuth0();
  // const { name, email, picture } = user

  const { colorTheme } = useContext(SettingsContext)

  console.log(`USER: ${JSON.stringify(user,null,4)}`);

  return (
    <Box width="100%" height='80px' display='flex' flexDirection='row' alignItems='center' mb={2} >
      {isAuthenticated && user && (
        <>
          <Avatar
            src={user.picture}
            alt={user.name}
            sx={{ width: 60, height: 60, marginX: '15px' }}
          />
          <Stack  display='flex' flexDirection='column'  justifyContent='center' py='10px' >
            <Typography variant='h4' children={user.name} />
            <Typography variant='body1' children={user.email} />
          </Stack>
        </>
      )}
    </Box>
  );
};