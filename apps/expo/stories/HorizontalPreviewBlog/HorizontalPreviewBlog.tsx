import { HorizontalPreviewBlog } from '@app-launch-kit/components/custom/blogs/HorizontalPreviewBlog';
import React from 'react';

import blogPosts from './data';

export const HorizontalPreviewBlogBasic = () => {
  return <HorizontalPreviewBlog blogPosts={blogPosts} />;
};
