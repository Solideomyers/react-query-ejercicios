import { useQuery } from '@tanstack/react-query';
import { Label } from '../../interfaces';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    // staleTime: 1000 * 60 * 60,
    // placeholderData: []
    initialData: [
      {
        id: 791921801,
        node_id: 'MDU6TGFiZWw3OTE5MjE4MDE =',
        url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        name: 'good first issue (taken)',
        color: 'ffffff',
        default: false,
      },
      {
        id: 710573595,
        node_id: 'MDU6TGFiZWw3MTA1NzM1OTU=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools',
        name: 'Component: Developer Tools',
        color: 'fbca04',
        default: false,
      },
    ],
  });

  return {
    labelsQuery,
  };
};
