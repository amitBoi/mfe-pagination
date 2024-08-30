import { useCallback, useEffect, useRef, useState } from 'react';
import { FixedSizeList } from 'react-window';
import { HEIGHT, LIMIT } from '@constants';
import { ContentSkeleton } from '@components/ContentSkeleton';
import { useTodos } from '@store/models/todos';

const getData = (data, startIndex, limit) => {
  return data.slice(startIndex, startIndex + limit).map(({ title }) => title);
};

export const InfiniteScrollWithAPI = () => {
  const observer = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const todos = useTodos.use.todos();
  const fetchTodos = useTodos.use.fetchTodos();

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    if (todos && todos.length) {
      loadMoreItems(items.length, LIMIT);
    }
  }, [todos]);

  const loadMoreItems = (startIndex, limit) => {
    setLoading(true);

    const newItems = getData(todos, startIndex, limit);

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

  const renderItem = (index, style, ref) => (
    <div ref={ref} style={style}>
      {`${index + 1}. ${items[index]}`}
    </div>
  );

  return (
    <ContentSkeleton title="Todos with Infinite Scroll">
      <FixedSizeList itemCount={items.length} itemSize={LIMIT} height={HEIGHT} width={'100%'} style={{ marginLeft: 25 }}>
        {({ index, style }) => {
          if (index === items.length - 1) {
            return renderItem(index, style, lastItemRef);
          }
          return renderItem(index, style);
        }}
      </FixedSizeList>
    </ContentSkeleton>
  );
};
