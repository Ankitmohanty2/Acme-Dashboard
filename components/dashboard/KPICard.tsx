import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import { useDashboardStats } from '../../api/mockData';

export const KPICard: React.FC<{ 
  title: string; 
  type: 'revenue' | 'users' | 'sessions' | 'bounce'; 
  isFirst?: boolean; 
  isLast?: boolean; 
  index?: number; 
}> = ({ title, type, index = 0 }) => {
  const { data, isLoading, error } = useDashboardStats();
  
  const getValue = () => {
    if (!data) return 0;
    if (type === 'revenue') return `$${data.totalRevenue.toLocaleString()}`;
    if (type === 'users') return data.totalUsers.toLocaleString();
    if (type === 'sessions') return data.activeSessions.toLocaleString();
    return `${data.bounceRate}%`;
  };

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      sx={{ 
        bgcolor: 'background.paper', 
        height: 140, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        p: 3,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 8px 32px rgba(79, 70, 229, 0.1)'
        }
      }}
    >
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
          {title}
        </Typography>
        
        {isLoading ? (
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircularProgress size={20} color="primary" />
            <Typography variant="body2" color="text.secondary">Fetching...</Typography>
          </Box>
        ) : error ? (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>Failed to load data.</Typography>
        ) : (
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', mt: 1 }}>
            {getValue()}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
