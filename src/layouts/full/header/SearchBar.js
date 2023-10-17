import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <TextField
        variant="outlined"
        placeholder="Search"
        className="search-bar"
        sx={{ width: '80%', mr: 1 }} // Adjust width and margin as needed
        InputProps={{
          startAdornment: (
            <IconButton edge="start" color="primary" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
