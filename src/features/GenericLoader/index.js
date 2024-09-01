import { FullPageLoader } from '@app/components/FullPageLoader';
import { useGenericLoader } from '@app/features/GenericLoader/genericLoader.slice';

export const GenericLoader = () => {
  const loading = useGenericLoader.use.loading();

  return loading && <FullPageLoader />;
};
