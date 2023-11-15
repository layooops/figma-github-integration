import { useAppContext } from '@/shared/lib/contexts';
import { PageLayout } from '@/shared/ui/components';

import { useResync } from './use-resync';

export const ResyncPage = () => {
  const { githubAccessToken, isLoading } = useAppContext();

  const resync = useResync();

  if (isLoading || !githubAccessToken) {
    return <div>Is loading token</div>;
  }

  return (
    <PageLayout>
      <div>Resyncing issue...</div>
    </PageLayout>
  );
};
