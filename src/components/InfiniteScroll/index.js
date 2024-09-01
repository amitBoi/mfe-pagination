import { useCallback, useEffect, useRef, useState } from 'react';
import { FixedSizeList } from 'react-window';

const getData = (data, startIndex, limit) => {
  return data.slice(startIndex, startIndex + limit);
};

export const InfiniteScroll = ({ data, limit, itemHeight, height, renderItem }) => {
  const observer = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (data && data.length) {
      loadMoreItems(items.length, limit);
    }
  }, [data]);

  const loadMoreItems = useCallback(
    (startIndex, limit) => {
      setLoading(true);

      const newItems = getData(data, startIndex, limit);

      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);

      if (newItems.length < limit) {
        setHasMore(false);
      }
    },
    [data],
  );

  const lastItemRef = useCallback(
    (element) => {
      if (loading || !hasMore) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entities) => {
        if (entities[0].isIntersecting && hasMore) {
          loadMoreItems(items.length, limit);
        }
      });

      if (element) {
        observer.current.observe(element);
      }
    },
    [items],
  );

  return (
    <FixedSizeList
      itemCount={items.length}
      itemSize={itemHeight}
      height={height}
      width={'100%'}
      style={{ marginLeft: 25 }}>
      {({ index, style }) => {
        if (index === items.length - 1) {
          return renderItem(items, index, style, lastItemRef);
        }
        return renderItem(items, index, style);
      }}
    </FixedSizeList>
  );
};
