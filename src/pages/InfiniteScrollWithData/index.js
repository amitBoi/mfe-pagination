import { useEffect, useRef, useState } from 'react';
import { FixedSizeList } from 'react-window';
import { HEIGHT, LIMIT } from '@app/constants/index';
import { ContentSkeleton } from '@app/components/ContentSkeleton';

const getData = (data, startIndex, limit) => data.slice(startIndex, startIndex + limit).map(({ title }, index) => `${startIndex + index + 1}. ${title}`);

export const InfiniteScrollWithData = ({ todos }) => {
  const [items, setItems] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    loadMoreItems(items.length, LIMIT);
  }, []);

  const loadMoreItems = (startIndex, limit) => {
    const newItems = getData(todos, startIndex, limit);

    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  const lastItemRef = (element) => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems(items.length, LIMIT);
      }
    });

    if (element) {
      observer.current.observe(element);
    }
  };

  return (
    <ContentSkeleton title="Todos with Infinite Scroll (data from shell-app)">
      <FixedSizeList itemCount={items.length} itemSize={LIMIT} height={HEIGHT} width={'100%'}>
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
