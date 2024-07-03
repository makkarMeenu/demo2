import React from 'react';
import { ThreeColumnBlog } from '@app-launch-kit/components/custom/blogs/ThreeColumnBlog';
import blogPosts from './data';

export const ThreeColumnBlogBasic = () => {
  return <ThreeColumnBlog blogPosts={blogPosts} />;
};
