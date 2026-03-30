import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { SEARCHES } from '@/constants/sidebarData';

export const SearchesList: React.FC = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.4 }} sx={{ mt: 3, mb: 4, px: 1 }}>
      <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 1.5, display: 'block', px: 1 }}>Searches</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {SEARCHES.map((search, i) => (
          <Box
            key={`${search.name}-${i}`}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
            whileHover={{ x: 4, backgroundColor: 'rgba(79, 70, 229, 0.04)' }}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1, px: 1.5, borderRadius: 2, cursor: 'pointer', transition: 'background-color 0.2s' }}
          >
            <Box
              component={motion.div}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              sx={{ width: 24, height: 24, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: search.color || '#0EA5E9', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
            >
              <img src={search.icon} alt="" style={{ width: 12, height: 12, filter: 'brightness(0) invert(1)' }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{search.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
