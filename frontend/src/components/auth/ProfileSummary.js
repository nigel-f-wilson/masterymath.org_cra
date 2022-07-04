import React, { useContext } from "react";

// THIRD PARTY
import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Avatar, Typography } from '@mui/material';

// CUSTOM
import { FlexRow } from "../layout";

import { SettingsContext } from "../../contexts";

export default function ProfileSummary(props) {
  // const { user, isAuthenticated } = useAuth0();
  const { name, email, picture } = props.user

  const { colorTheme } = useContext(SettingsContext)

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