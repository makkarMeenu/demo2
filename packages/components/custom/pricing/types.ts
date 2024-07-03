type PlanOffering = {
  iconName: React.FC;
  description: string;
};

export type LifetimePricingCard = {
  planDescription: string;
  planOfferings: PlanOffering[];
  totalPrice: string;
  currency: string;
  handleButtonPress: () => void;
};

export type SingleColumnPricingLayout = {
  title: string;
  data: LifetimePricingCard;
};

export interface SubscriptionIntervalsType {
  id: number;
  interval_title: string;
  interval_type: string;
  tag?: string;
  tag_action?: 'error' | 'warning' | 'success' | 'info' | 'muted';
}
