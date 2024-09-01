import { FullPageLoader } from '@app/components/FullPageLoader';
import { useGenericLoader } from '@app/store/models/genericLoader';

export const GenericLoader = () => {
  const loading = useGenericLoader.use.loading();

  return loading && <FullPageLoader />;
};
