import { IconCopy, IconLayoutDashboard, IconLogin, IconTypography } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'General',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },

  {
    id: uniqueId(),
    title: 'Companies',
    icon: IconTypography,
    href: '/Companies',
  },
  {
    id: uniqueId(),
    title: 'Support & Tickets',
    icon: IconCopy,
    href: '/Support & Tickets',
  },

  {
    id: uniqueId(),
    title: 'User Admins',
    icon: IconLogin,
    href: '/user-admins',
  },
];

export default Menuitems;
