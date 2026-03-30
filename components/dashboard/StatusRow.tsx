import React from 'react';
import { motion } from 'framer-motion';
import { StatusData } from '@/constants/dashboardData';
import { MAX_VISUAL_COUNT } from '@/utils/constants';

export interface StatusRowProps extends StatusData {
  index?: number;
}

export const StatusRow: React.FC<StatusRowProps> = ({ label, count, total, color, index = 0 }) => {
  const width = Math.min((count / MAX_VISUAL_COUNT) * 100, 100);

  return (
    <motion.div
      className="flex items-center gap-4 py-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      aria-label={`${label}: ${count} out of ${total}`}
    >
      <span className="text-sm font-medium text-gray-500 tracking-tight w-24 font-mono">{label}</span>
      <div className="flex-1 h-5 bg-gray-100 rounded-lg overflow-hidden" role="progressbar" aria-valuenow={count} aria-valuemin={0} aria-valuemax={total}>
        <motion.div
          className={`h-full rounded-lg ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <span className="text-sm font-medium text-gray-500 w-8 text-right font-mono">{count}</span>
    </motion.div>
  );
};

