import React from 'react';

import { HorizontalPreviewBlog } from '@app-launch-kit/components/custom/blogs/HorizontalPreviewBlog';
import blogPosts from './data';

export const HorizontalPreviewBlogBasic = () => {
  return <HorizontalPreviewBlog blogPosts={blogPosts} />;
};
