import React from 'react';
import { motion } from 'framer-motion';
import { NavItem as NavItemType } from '@/constants/sidebarData';
import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export interface NavItemProps extends NavItemType {
  index: number;
  isCollapsed?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, path, shortcut, index, isCollapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname === path;

  return (
    <Box
      component={motion.div}
      onClick={() => path && navigate(path)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
      whileHover={{ scale: isCollapsed ? 1.05 : 1.02, x: isCollapsed ? 0 : 5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      title={isCollapsed ? label : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'space-between',
        px: isCollapsed ? 0 : 2,
        py: 1.25,
        mb: 0.5,
        height: 48,
        borderRadius: isCollapsed ? '50%' : 3,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        bgcolor: active ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
        color: active ? 'primary.main' : 'text.secondary',
        borderLeft: (active && !isCollapsed) ? '3px solid' : '3px solid transparent',
        borderColor: (active && !isCollapsed) ? 'primary.main' : 'transparent',
        transformOrigin: 'left',
        '&:hover': {
          bgcolor: active ? 'rgba(79, 70, 229, 0.12)' : 'rgba(0,0,0,0.03)',
          color: active ? 'primary.main' : 'text.primary',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: isCollapsed ? 0 : 2, justifyContent: 'center' }}>
        {label === 'Search' ? (
          <Box component="img" src="/search.svg" alt="" sx={{ width: 22, height: 22, filter: active ? 'none' : 'grayscale(100%)', opacity: active ? 1 : 0.7 }} aria-hidden="true" />
        ) : (
          <Box component="span" sx={{ display: 'flex', '& > svg': { width: 22, height: 22 } }}>
            <Icon aria-hidden="true" />
          </Box>
        )}
        {!isCollapsed && <Typography variant="body2" sx={{ fontWeight: active ? 700 : 500, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{label}</Typography>}
      </Box>

      {(!isCollapsed && shortcut) && (
        <Box
          component={motion.span}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.05 }}
          sx={{
            fontSize: '0.7rem',
            color: 'text.secondary',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            px: 1,
            py: 0.25,
            borderRadius: 1.5,
            fontFamily: 'monospace',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider'
          }}
          aria-label={`Keyboard shortcut: ${shortcut}`}
        >
          {shortcut}
        </Box>
      )}
    </Box>
  );
};
