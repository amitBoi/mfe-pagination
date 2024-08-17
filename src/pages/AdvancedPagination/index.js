import { useEffect, useState } from "react";
import {
  INITIAL_PAGE_NO,
  ITEMS_PER_PAGE,
  TOTAL_ITEMS,
} from "./../../constants";
import { Pure } from "./Pure";

const getData = async (totalItems) => {
  await setTimeout(1000);

  return new Array(totalItems).fill().map((_, index) => `Data: ${index + 1}`);
};

export const AdvancedPagination = () => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NO);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    loadInitialData(TOTAL_ITEMS);
  }, []);

  const loadInitialData = async (totalItems) => {
    const newData = await getData(totalItems);

    setData(newData);
    if (currentPage > 0) {
      setCurrentData(newData[currentPage - 1]);
    }
  };

  const onPageChange = (pageNo) => {
    if (pageNo < 1) return;

    setCurrentPage(pageNo);
    setCurrentData(data[pageNo - 1]);
  };

  return (
    <Pure
      currentPage={currentPage}
      currentData={currentData}
      totalPages={data.length / ITEMS_PER_PAGE}
      onPageChange={onPageChange}
    />
  );
};
