import {
  CheckCircleIcon,
  Icon,
} from '@app-launch-kit/components/primitives/icon';
import { Toast, ToastTitle } from '@app-launch-kit/components/primitives/toast';
import { CircleX } from 'lucide-react-native';
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
        <Toast nativeID={toastId} action={action}>
          <Icon
            as={action == 'success' ? CheckCircleIcon : CircleX}
            className={`mr-2 ${
              action == 'success' ? 'stroke-success-400' : 'stroke-error-600'
            }`}
          />
          <ToastTitle>{message}</ToastTitle>
        </Toast>
      );
    },
  });
};
