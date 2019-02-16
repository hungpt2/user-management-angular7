export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'User',
    url: '/users',
    icon: 'icon-user',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }
];
