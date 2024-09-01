import { ContentSkeleton } from '@app/components/ContentSkeleton';
import { TodosWithAPI } from '@app/features/TodosWithAPI';

export default () => {
  return (
    <ContentSkeleton title="Todos with API">
      <TodosWithAPI />
    </ContentSkeleton>
  );
};
