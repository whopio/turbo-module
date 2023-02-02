import { type octo } from '../context';

export type ReleasePulls = Record<
  string,
  {
    number: number;
    title: string;
  }[]
>;

export type ReleaseStats = {
  authors: Set<string>;
  pulls: ReleasePulls;
};

export type Commits = Awaited<
  ReturnType<(typeof octo)['rest']['repos']['compareCommits']>
>['data']['commits'];

export type Pull = Awaited<
  ReturnType<(typeof octo)['rest']['pulls']['list']>
>['data'][number];
