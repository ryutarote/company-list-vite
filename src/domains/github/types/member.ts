export type Member = {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
};

export const isMember = (arg: unknown): arg is Member => {
  const m = arg as Member;

  return (
    typeof m?.login === 'string' &&
    typeof m?.id === 'number' &&
    typeof m?.nodeId === 'string' &&
    typeof m?.avatarUrl === 'string' &&
    typeof m?.gravatarId === 'string' &&
    typeof m?.url === 'string' &&
    typeof m?.htmlUrl === 'string' &&
    typeof m?.followersUrl === 'string' &&
    typeof m?.followingUrl === 'string' &&
    typeof m?.gistsUrl === 'string' &&
    typeof m?.starredUrl === 'string' &&
    typeof m?.subscriptionsUrl === 'string' &&
    typeof m?.organizationsUrl === 'string' &&
    typeof m?.reposUrl === 'string' &&
    typeof m?.eventsUrl === 'string' &&
    typeof m?.receivedEventsUrl === 'string' &&
    typeof m?.type === 'string' &&
    typeof m?.siteAdmin === 'boolean'
  );
};

export const isMembers = (arg: unknown[]): arg is Member[] =>
  !arg.some((arg) => !isMember(arg));
