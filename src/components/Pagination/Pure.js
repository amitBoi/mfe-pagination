import "./style.css";

export const Pure = ({
  currentPage,
  currentData,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (pageNo) => () => onPageChange(pageNo);

  const renderPageButton = (pageNo) => {
    if (pageNo === undefined) {
      return <li>...</li>;
    }

    if (pageNo === currentPage) {
      return <li>[{pageNo}]</li>;
    }

    if (pageNo > 0 && pageNo <= totalPages) {
      return <li onClick={handlePageChange(pageNo)}>{pageNo}</li>;
    }
  };

  return (
    <div>
      <div>Current Data: {currentData}</div>
      <div>Current Page: {currentPage}</div>
      <ul>
        {currentPage > 2 && renderPageButton(1)}
        {currentPage > 3 && renderPageButton()}
        {renderPageButton(currentPage - 1)}
        {renderPageButton(currentPage)}
        {renderPageButton(currentPage + 1)}
        {currentPage < totalPages - 2 && renderPageButton()}
        {currentPage < totalPages - 1 && renderPageButton(totalPages)}
      </ul>
    </div>
  );
};
