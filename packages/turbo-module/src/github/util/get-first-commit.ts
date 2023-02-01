import getHistory from "./get-history";

const getFirstCommit = async () => {
  const {
    totalCount,
    pageInfo: { endCursor },
    nodes,
  } = await getHistory();
  if (totalCount > 1) {
    const [hash] = endCursor.split(" ");
    const {
      nodes: [commit],
    } = await getHistory(`${hash} ${totalCount - 2}`);
    return commit;
  } else {
    return nodes[0];
  }
};

export default getFirstCommit;
