import { octo, owner, repo } from '../context';

const gql = ([...strings]: TemplateStringsArray, ...vars: unknown[]) => {
  if (!strings.length) return '';
  const parts = [strings.shift()];
  for (const idx in strings) {
    parts.push(`${vars[idx]}`);
    parts.push(strings[idx]);
  }
  return parts.join('');
};

const query = gql`
  query ($repo: String!, $owner: String!, $branch: String!, $cursor: String) {
    repository(name: $repo, owner: $owner) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(first: 1, after: $cursor) {
              nodes {
                oid
              }
              totalCount
              pageInfo {
                endCursor
              }
            }
          }
        }
      }
    }
  }
`;

const getHistory = async (cursor: string | null = null) => {
  const {
    repository: {
      ref: {
        target: { history },
      },
    },
  } = await octo.graphql(query, {
    owner,
    repo,
    cursor,
    branch: 'main',
  });
  return history as {
    nodes: {
      oid: string;
    }[];
    totalCount: number;
    pageInfo: {
      endCursor: string;
    };
  };
};

export default getHistory;
