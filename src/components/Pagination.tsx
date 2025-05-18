// import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}) => {
  return (
    <>
      {/* Controles de paginación */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="btn btn-outline"
        >
          Anterior
        </button>
        <span className="text-sm font-semibold">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="btn btn-outline"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
