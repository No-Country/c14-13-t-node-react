interface PaginationButtonsProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
export const PaginationButtons = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationButtonsProps) => {
  const handleClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className='my-6 flex justify-center space-x-2'>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`rounded px-4 py-2 ${
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'border border-gray-300 bg-gray-200 text-black'
          }`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
