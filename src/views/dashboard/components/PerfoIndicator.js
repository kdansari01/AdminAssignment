import { Box, Typography } from '@mui/material';
import React from 'react';

const PerfoIndicator = () => {
  const kpiData = [
    { title: 'Client Retention Rate', value: '55%' },
    { title: 'Client Satisfaction', value: '55%' },
    { title: 'Revenue Generated', value: '55%' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Key Performance Indicator
      </Typography>

      {kpiData.map((item) => (
        <Box
          key={item.title}
          sx={{
            borderLeft: 2,
            borderColor: 'blue',
            paddingLeft: 2,
            marginBottom: 1,
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body1">{item.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PerfoIndicator;
