import { BlogCard } from '@app-launch-kit/components/custom/blogs/BlogCard';

import blogData from './data';

export const BlogCardBasic = () => {
  return (
    <BlogCard
      publishedDate={blogData.publishedDate}
      category={blogData.category}
      title={blogData.title}
      description={blogData.description}
      authorName={blogData.authorName}
      designation={blogData.designation}
      authorProfileURI={blogData.authorProfileURI}
      bannerURI={blogData.bannerURI}
    />
  );
};
