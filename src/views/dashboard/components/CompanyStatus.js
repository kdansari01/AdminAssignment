import { Box, Typography } from '@mui/material';
import React from 'react';

const CompanyStatus = () => {
  const kpiData = [
    { title: 'Total', value: '20' },
    { title: 'Active', value: '15' },
    { title: 'New', value: '3' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Companies Status
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

export default CompanyStatus;
