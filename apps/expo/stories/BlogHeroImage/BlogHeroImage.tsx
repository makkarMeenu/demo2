import { BlogHeroImage } from '@app-launch-kit/components/custom/blogs/BlogHeroImage';
import React from 'react';

import blogPosts from './data';

export const BlogHeroImageBasic = () => {
  return <BlogHeroImage blogPosts={blogPosts} />;
};
