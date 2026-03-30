import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ChannelRow } from './ChannelRow';
import { SEGMENTATION_DATA } from '@/constants/dashboardData';

export const SegmentationCard: React.FC = () => {
  const { totalCustomers, segments, channels } = SEGMENTATION_DATA;


  const getColor = (colorStr: string) => {
    if (colorStr.includes('blue')) return 'info.main';
    if (colorStr.includes('purple')) return 'secondary.main';
    if (colorStr.includes('orange')) return 'primary.main';
    return 'primary.main';
  };

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
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
        <Typography variant="body2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }} gutterBottom>
          Segmentation
        </Typography>
        
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
            {totalCustomers.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            total customers
          </Typography>
        </Box>


        <Box sx={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', mb: 3, gap: '2px' }} role="progressbar">
          {segments.map((segment) => (
            <Box
              key={segment.label}
              sx={{ width: `${segment.percentage}%`, bgcolor: getColor(segment.color) }}
              aria-label={`${segment.label}: ${segment.percentage}%`}
            />
          ))}
        </Box>


        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 2, mb: 4 }}>
          {segments.map((segment) => (
            <Box key={segment.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: getColor(segment.color) }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                {segment.label}
              </Typography>
            </Box>
          ))}
        </Box>


        <Box sx={{ flex: 1, mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase' }}>Channels</Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, width: 48, textAlign: 'right', textTransform: 'uppercase' }}>Number</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, width: 48, textAlign: 'right', textTransform: 'uppercase' }}>Total</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {channels.map((channel, index) => (
              <ChannelRow key={channel.name} {...channel} index={index} />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
