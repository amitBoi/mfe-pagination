import { useCallback, useEffect, useRef, useState } from 'react';
import { FixedSizeList } from 'react-window';
import { HEIGHT, LIMIT } from '@constants';
import { ContentSkeleton } from '@components/ContentSkeleton';

const getData = async (startIndex, limit) => {
  await setTimeout(1000);

  return new Array(limit).fill().map((_, index) => `Data ${startIndex + index + 1}`);
};

export const InfiniteScroll = () => {
  const observer = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMoreItems(items.length, LIMIT);
  }, []);

  const loadMoreItems = async (startIndex, limit) => {
    setLoading(true);

    const newItems = await getData(startIndex, limit);

    setItems((prevItems) => [...prevItems, ...newItems]);
    setLoading(false);

    if (newItems.length < LIMIT) {
      setHasMore(false);
    }
  };

  const lastItemRef = useCallback(
    (element) => {
      if (loading || !hasMore) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entities) => {
        if (entities[0].isIntersecting && hasMore) {
          loadMoreItems(items.length, LIMIT);
        }
      });

      if (element) {
        observer.current.observe(element);
      }
    },
    [items],
  );

  return (
    <ContentSkeleton title="Infinite Scroll">
      <FixedSizeList itemCount={items.length} itemSize={LIMIT} height={HEIGHT} width={'50%'}>
        {({ index, style }) => {
          if (index === items.length - 1) {
            return (
              <div ref={lastItemRef} style={style}>
                {items[index]}
              </div>
            );
          }

          return <div style={style}>{items[index]}</div>;
        }}
      </FixedSizeList>
    </ContentSkeleton>
  );
};
