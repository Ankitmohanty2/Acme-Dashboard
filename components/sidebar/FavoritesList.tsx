import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Avatar } from '@mui/material';
import { FAVORITES } from '@/constants/sidebarData';

export const FavoritesList: React.FC = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }} sx={{ mt: 2, px: 1 }}>
      <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 1.5, display: 'block', px: 1 }}>Favorites</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {FAVORITES.map((fav, i) => (
          <Box
            key={`${fav.name}-${i}`}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            whileHover={{ x: 4, backgroundColor: 'rgba(79, 70, 229, 0.04)' }}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1, px: 1.5, borderRadius: 2, cursor: 'pointer', transition: 'background-color 0.2s' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar src={fav.img} alt={fav.name} sx={{ width: 24, height: 24 }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{fav.name}</Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.65rem' }}>{fav.type}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
