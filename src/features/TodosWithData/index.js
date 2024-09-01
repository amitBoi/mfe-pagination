import { InfiniteScroll } from '@app/components/InfiniteScroll';
import { HEIGHT, ITEM_HEIGHT, ITEM_LIMIT } from '@app/constants';

export const TodosWithData = ({ todos }) => {
  const renderItem = (items, index, style, ref) => (
    <div ref={ref} style={style}>
      {`${index + 1}. ${items[index].title}`}
    </div>
  );

  return (
    <InfiniteScroll
      data={todos}
      limit={ITEM_LIMIT}
      itemHeight={ITEM_HEIGHT}
      height={HEIGHT}
      renderItem={renderItem}
    />
  );
};
