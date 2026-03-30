import React from 'react';
import { motion } from 'framer-motion';
import { DashboardHeader } from './DashboardHeader';
import { Box, Stack, Typography } from '@mui/material';
import { KPICard } from './KPICard';
import { SalesRevenueCard } from './SalesRevenueCard';
import { SegmentationCard } from './SegmentationCard';
import { UsersTable } from './UsersTable';
import { WebVisitsCard } from './WebVisitsCard';

export const Dashboard: React.FC = () => {
  return (
    <Box
      component={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        flexGrow: 1, 
        p: { xs: 2, md: 4, lg: 6 }, 
        bgcolor: 'background.default', 
        minHeight: '100vh', 
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}
    >
      <DashboardHeader />

      <Stack spacing={4} sx={{ maxWidth: 1600, mx: 'auto', mt: 5 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          <KPICard title="Total Revenue" type="revenue" isFirst index={0} />
          <KPICard title="Total Users" type="users" index={1} />
          <KPICard title="Active Sessions" type="sessions" index={2} />
          <KPICard title="Bounce Rate" type="bounce" isLast index={3} />
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: 3,
          }}
        >
          <SalesRevenueCard />
          <SegmentationCard />
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 3,
            pb: 4
          }}
        >
          <UsersTable />
          <WebVisitsCard />
        </Box>

        <Box sx={{ mt: 4, pt: 3, pb: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, letterSpacing: '0.05em' }}>
            Made with ❤️ by Ankit
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
