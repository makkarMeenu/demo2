export type BlogCardProps = {
  publishedDate?: string;
  category?: string;
  readTime?: string;
  title: string;
  description: string;
  authorName: string;
  designation: string;
  authorProfileURI: string;
  bannerURI: string;
  isHorizontal?: boolean;
};

export type BlogPost = {
  id: number;
  publishedDate?: string;
  category?: string;
  readTime?: string;
  title: string;
  description: string;
  authorName: string;
  designation: string;
  authorProfileURI: string;
  bannerURI: string;
  isHorizontal?: boolean;
};

export enum Tab {
  FOOD = "Food",
  TRENDS = "Trends",
  GUIDES = "Guides",
  INSIGHTS = "Insights",
}
