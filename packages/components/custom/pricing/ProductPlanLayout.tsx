import config from '@app-launch-kit/config';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import ProductPlanCard from '@app-launch-kit/components/custom/pricing/ProductPlanCard';
import { usePayment } from '@app-launch-kit/hooks/usePayment';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { useEffect, useState } from 'react';

const ProductPlanLayout = ({ data }: { data: any }) => {
  const [selectedID, setSelectedID] = useState('');
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const router = useRouter();
  const { navigationLinks } = config;
  setTimeout(() => {
    setLoading(false);
  }, 800);

  const initPayment = usePayment();

  const handleBuyNow = (id: string) => {
    setSelectedID(id);
    if (!loading && !user) {
      router.replace(`/${navigationLinks.signIn}`);
    }
    initPayment(id);
  };
  return (
    <VStack className="sm:flex-row mt-10" space="2xl">
      {data.map((item: any) => {
        return (
          <ProductPlanCard
            key={item.id}
            id={item.id}
            productName={item.product.name}
            price={item.unit_amount}
            currency={item.currency}
            priceSuffix={`user / ${item.interval}`}
            handleButtonClickWithId={handleBuyNow}
            loading={item.id === selectedID}
          />
        );
      })}
    </VStack>
  );
};

export default ProductPlanLayout;
