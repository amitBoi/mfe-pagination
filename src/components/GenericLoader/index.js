import { FullPageLoader } from '@components/FullPageLoader';
import { useGenericLoader } from '@store/models/genericLoader';

export const GenericLoader = () => {
  const loading = useGenericLoader.use.loading();

  return loading && <FullPageLoader />;
};
