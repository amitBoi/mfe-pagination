import { ContentSkeleton } from '@app/components/ContentSkeleton';
import { TodosWithData } from '@app/features/TodosWithData';

export default ({ todos }) => {
  return (
    <ContentSkeleton title="Todos with Data (from shell-app)">
      <TodosWithData todos={todos} />
    </ContentSkeleton>
  );
};
