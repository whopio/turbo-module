import { prereleaseType } from '../context';

// Check if version matches the configured prerelease type (e.g., canary, beta)
const isPrerelease = (test: string) => {
  const pattern = new RegExp(`^\\d+\\.\\d+\\.\\d+-${prereleaseType}\\.\\d+$`);
  return pattern.test(test);
};

// Legacy export for backwards compatibility
const isCanary = isPrerelease;

export default isCanary;
export { isPrerelease };
