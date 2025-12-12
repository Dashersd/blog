'use client';

import { useState } from 'react';

type SortOrder = 'newest' | 'oldest';

interface BlogSortProps {
  onSortChange: (order: SortOrder) => void;
  currentSort: SortOrder;
}

export default function BlogSort({ onSortChange, currentSort }: BlogSortProps) {
  return (
    <div className="flex items-center justify-end mb-6">
      <div className="flex items-center gap-2">
        <label htmlFor="sort-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sort by:
        </label>
        <select
          id="sort-select"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value as SortOrder)}
          className="px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors cursor-pointer"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
}
