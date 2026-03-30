import React, { useState, useMemo } from 'react';
import { 
  Card, CardContent, Typography, Box, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, TablePagination, CircularProgress, Chip 
} from '@mui/material';
import { motion } from 'framer-motion';
import { useUsersData } from '../../api/mockData';

export const UsersTable: React.FC = () => {
  const { data, isLoading, error } = useUsersData();
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    if (!data) return [];
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [data, page]);

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>
          User Directory
        </Typography>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">Error loading users.</Typography>
        ) : (
          <>
            <TableContainer>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Name</TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Email</TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Role</TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((row) => (
                    <TableRow key={row.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell sx={{ color: 'text.primary' }}>{row.name}</TableCell>
                      <TableCell sx={{ color: 'text.secondary' }}>{row.email}</TableCell>
                      <TableCell sx={{ color: 'text.secondary' }}>{row.role}</TableCell>
                      <TableCell>
                        <Chip 
                          label={row.status} 
                          size="small"
                          color={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'default'} 
                          sx={{ fontWeight: 600 }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={data?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, newPage) => setPage(newPage)}
              rowsPerPageOptions={[5]}
              sx={{ color: 'text.secondary', mt: 2 }}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};
