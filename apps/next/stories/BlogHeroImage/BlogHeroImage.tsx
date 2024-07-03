import React from 'react';
import { BlogHeroImage } from '@app-launch-kit/components/custom/blogs/BlogHeroImage';
import blogPosts from './data';

export const BlogHeroImageBasic = () => {
  return <BlogHeroImage blogPosts={blogPosts} />;
};
