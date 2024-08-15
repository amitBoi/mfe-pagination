import { useEffect, useState } from "react";
import { Pure } from "./Pure";

const DATA_LENGTH = 5000;
const INITIAL_PAGE = 1;
const PAGE_SIZE = 1;

const getData = async (limit) => {
  await setTimeout(1000);

  return new Array(limit).fill().map((_, index) => `Data ${index + 1}`);
};

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    loadInitialData(DATA_LENGTH);
  }, []);

  const loadInitialData = async (limit) => {
    const newData = await getData(limit);

    setData(newData);
    if (currentPage > 0) {
      setCurrentData(newData[currentPage - 1]);
    }
  };

  const onPageChange = (pageNo) => {
    if (pageNo > 0) {
      setCurrentPage(pageNo);
      setCurrentData(data[pageNo - 1]);
    }
  };

  return (
    <Pure
      currentPage={currentPage}
      currentData={currentData}
      totalPages={DATA_LENGTH / PAGE_SIZE}
      onPageChange={onPageChange}
    />
  );
};
