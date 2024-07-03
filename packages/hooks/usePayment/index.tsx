import { supabase } from '@app-launch-kit/utils/lib/supabase';
import { useStripe, StripeProvider } from '@stripe/stripe-react-native';
import { useRouter } from '@unitools/router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { success_url } from './url';

export function usePayment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const router = useRouter();

  const openPaymentSheet = async () => {
    const data = await presentPaymentSheet();
    if (data?.error) {
      Alert.alert(`Error code: ${data?.error.code}`, data?.error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!\nRedirecting...');
      setTimeout(() => {
        router.push(success_url);
      }, 2500);
    }
  };

  const fetchPaymentSheetParams = async (id: string) => {
    const productData = {
      priceId: id,
    };
    const { data, error } = await supabase.functions.invoke(
      'payment-data-native',
      {
        body: JSON.stringify(productData),
      }
    );

    if (!data || error) {
      Alert.alert(`Error: ${error?.message ?? 'no data'}`);
      return {};
    }
    const { paymentIntent, ephemeralKey, customer, stripe_pk } = data;

    return {
      paymentIntent,
      ephemeralKey,
      customer,
      stripe_pk,
    };
  };

  const initPayment = async (id: string) => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      // stripe_pk
    } = await fetchPaymentSheetParams(id);

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      //   allowsDelayedPaymentMethods: true,
      returnURL: success_url,
    });
    if (!error) {
      openPaymentSheet();
    } else {
      console.log('error: ', error);
    }
  };
  return initPayment;
}
