import React from 'react';
import { motion } from 'framer-motion';
import { StatusRow } from './StatusRow';
import { LEADS_STATUS_DATA } from '@/constants/dashboardData';

export const LeadsStatusCard: React.FC = () => {
  const { totalInPipeline, statuses } = LEADS_STATUS_DATA;

  return (
    <motion.div
      className="lg:col-span-5 bg-white p-8 rounded-xl border border-[#eeeeee]"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h3 className="text-gray-500 font-medium text-sm mb-4">Leads by Status</h3>
      <div className="mb-8">
        <span className="text-4xl font-semibold text-gray-900 tracking-tight font-mono">{totalInPipeline.toLocaleString()}</span>
        <span className="text-gray-400 text-sm ml-2">in pipeline</span>
      </div>

      <div className="space-y-4">
        {statuses.map((status, index) => (
          <StatusRow key={status.label} {...status} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

