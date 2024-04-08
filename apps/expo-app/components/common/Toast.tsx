import { Toast, ToastTitle } from '@gluestack-ui/themed';
import React from 'react';

interface ToastOptions {
  action?: 'success' | 'error' | 'warning' | 'info' | 'attention' | undefined;
  message?: string;
  placement?:
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'top'
    | 'bottom';
  duration?: number;
}

const defaultData: ToastOptions = {
  action: 'success',
  message: 'Done Successfully',
  placement: 'bottom right',
  duration: 3000,
};

export const showToast = (
  toast: any,
  { action, message, placement, duration }: ToastOptions = {}
) => {
  const options: ToastOptions = {
    placement: placement || defaultData.placement,
    duration: duration || defaultData.duration,
  };
  return toast.show({
    ...options,
    render: ({ id }: any) => {
      const toastId = id.toString();
      return (
        <Toast nativeID={toastId} variant="accent" action={action}>
          <ToastTitle>{message}</ToastTitle>
        </Toast>
      );
    },
  });
};
