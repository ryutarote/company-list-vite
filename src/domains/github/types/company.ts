export interface Company {
  login: string;
  id: number;
  nodeId: string;
  url: string;
  reposUrl: string;
  eventsUrl: string;
  hooksUrl: string;
  issuesUrl: string;
  membersUrl: string;
  publicMembersUrl: string;
  avatarUrl: string;
  description: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  twitterUsername: string | null;
  isVerified: boolean;
  hasOrganizationProjects: boolean;
  hasRepositoryProjects: boolean;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  htmlUrl: string;
  createdAt: string;
  updatedAt: string;
  type: string;
}

const isCompany = (arg: unknown): arg is Company => {
  const o = arg as Company;

  return (
    typeof o?.login === 'string' &&
    typeof o?.id === 'number' &&
    typeof o?.nodeId === 'string' &&
    typeof o?.url === 'string' &&
    typeof o?.reposUrl === 'string' &&
    typeof o?.eventsUrl === 'string' &&
    typeof o?.hooksUrl === 'string' &&
    typeof o?.issuesUrl === 'string' &&
    typeof o?.membersUrl === 'string' &&
    typeof o?.publicMembersUrl === 'string' &&
    typeof o?.avatarUrl === 'string' &&
    typeof o?.description === 'string' &&
    typeof o?.name === 'string' &&
    (o?.company === null || typeof o?.company === 'string') &&
    (o?.blog === null || typeof o?.blog === 'string') &&
    (o?.location === null || typeof o?.location === 'string') &&
    (o?.email === null || typeof o?.email === 'string') &&
    (o?.twitterUsername === null || typeof o?.twitterUsername === 'string') &&
    typeof o?.isVerified === 'boolean' &&
    typeof o?.hasOrganizationProjects === 'boolean' &&
    typeof o?.hasRepositoryProjects === 'boolean' &&
    typeof o?.publicRepos === 'number' &&
    typeof o?.publicGists === 'number' &&
    typeof o?.followers === 'number' &&
    typeof o?.following === 'number' &&
    typeof o?.htmlUrl === 'string' &&
    typeof o?.createdAt === 'string' &&
    typeof o?.updatedAt === 'string' &&
    typeof o?.type === 'string'
  );
};

const isCompanies = (args: unknown[]): args is Company[] =>
  !args.some((arg) => !isCompany(arg));

export { isCompany, isCompanies };
