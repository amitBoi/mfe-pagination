import { useEffect, useState } from 'react';
import { InfiniteScroll as InfiniteScrollComp } from '@app/components/InfiniteScroll';
import { HEIGHT, ITEM_HEIGHT, ITEM_LIMIT } from '@app/constants';

const getData = async (limit) => {
  await setTimeout(1000);

  return new Array(limit).fill().map((_, index) => `lorem ipsum fetttt kutu ${index + 1}`);
};

export const InfiniteScroll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const newData = await getData(200);
    setData(newData);
  };

  const renderItem = (items, index, style, ref) => (
    <div ref={ref} style={style}>
      {`${index + 1}. ${items[index]}`}
    </div>
  );

  return (
    <InfiniteScrollComp
      data={data}
      limit={ITEM_LIMIT}
      itemHeight={ITEM_HEIGHT}
      height={HEIGHT}
      renderItem={renderItem}
    />
  );
};
