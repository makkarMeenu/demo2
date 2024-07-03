import { supabase } from '@app-launch-kit/utils/lib/supabase';
import { useRouter } from '@unitools/router';
import { cancel_url, success_url } from './url';

export function usePayment() {
  const router = useRouter();

  const initPayment = async (id: string) => {
    const productData = {
      id: id,
      success_url,
      cancel_url,
    };
    const { data, error } = await supabase.functions.invoke(
      'payment-data-web',
      {
        body: JSON.stringify(productData),
      }
    );
    if (error) {
      console.log('some error happened', error);
    } else {
      router.push(data.url);
    }
  };
  return initPayment;
}
