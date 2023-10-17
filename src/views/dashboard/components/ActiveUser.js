import { Box, Typography, LinearProgress } from '@mui/material';
import React from 'react';

const ActiveUser = () => {
  const appUserPercentage = 89;
  const webUserPercentage = 11;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Active User Base
      </Typography>

      <Box sx={{ marginBottom: 1 }}>
        <Typography variant="subtitle1" sx={{ marginTop: 1, color: 'green' }}>
          App User: {`${appUserPercentage}%`}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={appUserPercentage}
          sx={{
            borderRadius: 5,
            height: 10,
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
          }}
        />
      </Box>

      <Box sx={{ marginBottom: 1 }}>
        <Typography variant="subtitle1" sx={{ marginTop: 1, color: 'red' }}>
          Web User: {`${webUserPercentage}%`}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={webUserPercentage}
          sx={{
            borderRadius: 5,
            height: 10,
            backgroundColor: 'rgba(255, 0, 0, 0.3)', // Red color with opacity
          }}
        />
      </Box>
    </Box>
  );
};

export default ActiveUser;
