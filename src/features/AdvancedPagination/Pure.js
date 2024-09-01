import { ContentSkeleton } from '@app/components/ContentSkeleton';
import * as classes from '@app/features/Pagination/index.module.css';

export const Pure = ({ currentPage, currentData, totalPages, onPageChange }) => {
  const handlePageChange = (pageNo) => () => onPageChange(pageNo);

  const renderPageButton = (pageNo) => {
    if (pageNo === undefined) {
      return <li className="hidden">...</li>;
    }

    if (pageNo < 1 || pageNo > totalPages) return;

    if (pageNo === currentPage) {
      return <li className="selected">[{pageNo}]</li>;
    }

    return <li onClick={handlePageChange(pageNo)}>{pageNo}</li>;
  };

  return (
    <ContentSkeleton title="Advanced Pagination">
      <h3>Current Data: {currentData}</h3>
      <h4>Current Page: {currentPage}</h4>
      <ul className={classes.list}>
        {currentPage > 2 && renderPageButton(1)}
        {currentPage > 3 && renderPageButton(2)}
        {currentPage > 4 && renderPageButton()}
        {renderPageButton(currentPage - 1)}
        {renderPageButton(currentPage)}
        {renderPageButton(currentPage + 1)}
        {currentPage < totalPages - 3 && renderPageButton()}
        {currentPage < totalPages - 2 && renderPageButton(totalPages - 1)}
        {currentPage < totalPages - 1 && renderPageButton(totalPages)}
      </ul>
    </ContentSkeleton>
  );
};
