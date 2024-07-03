import { Suspense } from 'react';
import { Loading } from '@app-launch-kit/components/custom/Loading';

const Layout = ({ children }: any) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default Layout;
