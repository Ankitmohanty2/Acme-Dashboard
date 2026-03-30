import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Drawer, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import { SidebarLeft } from '@/components/ui/Icons';
import { NavItem } from './NavItem';
import { FavoritesList } from './FavoritesList';
import { SearchesList } from './SearchesList';
import { NAV_ITEMS } from '@/constants/sidebarData';

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const width = isCollapsed ? 88 : 280;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          overflowX: 'hidden',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }}
    >
      <Box sx={{ p: isCollapsed ? 2 : 4, pb: 2, display: 'flex', flexDirection: isCollapsed ? 'column' : 'row', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', transition: 'all 0.3s' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: isCollapsed ? 2 : 0 }}>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1, rotate: 5 }}
            sx={{ width: 36, height: 36, flexShrink: 0 }}
          >
            <img src="image.png" alt="Acme Inc logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </Box>
          <AnimatePresence>
            {!isCollapsed && (
              <Box component={motion.div} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, width: 0, overflow: 'hidden' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', whiteSpace: 'nowrap' }}>
                  Acme Inc
                </Typography>
              </Box>
            )}
          </AnimatePresence>
        </Box>
        <IconButton size="small" onClick={() => setIsCollapsed(!isCollapsed)} sx={{ color: 'text.secondary', transition: '0.3s', '&:hover': { color: 'primary.main', bgcolor: 'rgba(79, 70, 229, 0.08)' } }}>
          <SidebarLeft style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} className="w-5 h-5" />
        </IconButton>
      </Box>

      <Box component="nav" sx={{ px: isCollapsed ? 2 : 2, display: 'flex', flexDirection: 'column', gap: 0.5, mt: 2 }}>
        {NAV_ITEMS.map((item, index) => (
          <NavItem key={item.label} {...item} index={index} isCollapsed={isCollapsed} />
        ))}
      </Box>

      <AnimatePresence>
        {!isCollapsed && (
          <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0, overflow: 'hidden' }} transition={{ duration: 0.2 }}>
            <Box sx={{ mt: 2, px: 2 }}><FavoritesList /></Box>
            <Box sx={{ mt: 1, px: 2 }}><SearchesList /></Box>
          </Box>
        )}
      </AnimatePresence>

      <Box sx={{ flexGrow: 1 }} />
      
      <AnimatePresence>
        {!isCollapsed && (
          <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0, overflow: 'hidden' }}>
            <Divider sx={{ mb: 3 }} />
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              sx={{ p: 3, pt: 0 }}
            >
              <Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 0.5, fontWeight: 700 }}>
                Get 50% Discount
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Upgrade your free trial today!
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'primary.contrastText',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                }}
              >
                Upgrade now
              </Button>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Drawer>
  );
};
