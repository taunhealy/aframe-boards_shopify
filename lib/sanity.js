import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  useCdn: true, // Use CDN for faster response time
  apiVersion: '2023-08-01' // Use current date
});
