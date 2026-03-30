import React from 'react';
import { Box, Typography, Button, Stack, Avatar } from '@mui/material';

export const DashboardHeader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
      <Box>
        <Typography variant="h2" sx={{ color: 'text.primary', mb: 1, textTransform: 'uppercase' }}>
          Overview
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Real-time metrics and system status.
        </Typography>
      </Box>
      
      <Stack direction="row" spacing={2} alignItems="center">
        <Button 
          variant="outlined" 
          sx={{ 
            borderColor: 'divider', 
            color: 'text.primary', 
            borderRadius: 2,
            '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' } 
          }}
        >
          Export Report
        </Button>
        <Avatar src="image.png" alt="User Profile" sx={{ width: 44, height: 44, border: '2px solid', borderColor: 'primary.main' }} />
      </Stack>
    </Box>
  );
};
