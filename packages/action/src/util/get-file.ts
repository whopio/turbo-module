import { octo, owner, repo } from '../context';

const getFile = async (path: string, ref?: string) => {
  const { data: content } = await octo.rest.repos.getContent({
    repo,
    owner,
    path,
    ref,
  });
  if ('content' in content) {
    return content;
  }
  throw new Error('Could not load content as file');
};

export const getFolder = async (path: string, ref?: string) => {
  const { data: content } = await octo.rest.repos.getContent({
    repo,
    owner,
    path,
    ref,
  });
  if (content instanceof Array) {
    return content;
  }
  throw new Error('Could not load content as folder');
};

export type JSONFile = `${string}.json`;

export const getJsonFile = async <T>(path: JSONFile, ref?: string) => {
  const { content, sha } = await getFile(path, ref);
  return {
    content: JSON.parse(Buffer.from(content, 'base64').toString()) as T,
    sha: sha,
  };
};

export default getFile;
