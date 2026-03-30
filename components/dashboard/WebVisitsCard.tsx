import React from 'react';
import { Card, CardContent, Typography, Box, Stack, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { VisitsChart } from '@/components/charts/VisitsChart';
import { useDashboardStats } from '../../api/mockData';
import { GrowthBadge } from './GrowthBadge';
import { WEB_VISITS_DATA } from '@/constants/dashboardData';

export const WebVisitsCard: React.FC = () => {
  const { data, isLoading, error } = useDashboardStats();
  const { growthBadges } = WEB_VISITS_DATA;

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      sx={{ 
        bgcolor: 'background.paper', 
        p: { xs: 1, sm: 3 }, 
        border: '1px solid', 
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}
    >
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: { xs: 1, sm: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }} gutterBottom>
              Web Visits
            </Typography>

            {isLoading ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <CircularProgress size={24} color="secondary" />
                <Typography variant="body2" color="text.secondary">Fetching visits...</Typography>
              </Box>
            ) : error ? (
              <Typography color="error">Error loading data</Typography>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  {data?.activeSessions.toLocaleString() || '0'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600 }}>
                  +5.2% ↑ vs last month
                </Typography>
              </Box>
            )}
          </Box>
          <Stack direction="row" spacing={1}>
            {growthBadges.map((badge, index) => (
              <GrowthBadge key={badge.label} {...badge} index={index} />
            ))}
          </Stack>
        </Box>
        <Box sx={{ flex: 1, minHeight: 250, display: 'flex', alignItems: 'flex-end', mt: 2 }}>
          <VisitsChart />
        </Box>
      </CardContent>
    </Card>
  );
};
