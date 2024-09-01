import { ContentSkeleton } from '@app/components/ContentSkeleton';
import { InfiniteScroll } from '@app/features/InfiniteScroll';

export default () => {
  return (
    <ContentSkeleton title="Infinite Scroll">
      <InfiniteScroll />
    </ContentSkeleton>
  );
};
