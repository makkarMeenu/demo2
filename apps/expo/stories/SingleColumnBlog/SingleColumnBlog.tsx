import { SingleColumnBlog } from '@app-launch-kit/components/custom/blogs/SingleColumnBlog';
import React from 'react';

import { foodData, trendsData, guidesData, insightsData } from './data';

export const SingleColumnBlogBasic = () => {
  return (
    <SingleColumnBlog
      foodData={foodData}
      trendsData={trendsData}
      guidesData={guidesData}
      insightsData={insightsData}
    />
  );
};
