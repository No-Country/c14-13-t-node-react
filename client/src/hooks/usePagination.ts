import { useState } from 'react';
import { PaginationButtons } from '@/components/PaginationButtons';

export function usePagination(totalItems: number, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return { currentPage, totalPages, setCurrentPage, PaginationButtons };
}
