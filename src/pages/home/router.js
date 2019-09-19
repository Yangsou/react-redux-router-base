import { lazy } from 'react';

export default [
  {
    path: '/home',
    component: lazy(() => import('./Home')),
    title: 'Home',
    isPublic: true
  },
  {
    path: '/',
    component: lazy(() => import('./Home')),
    exact: true,
    title: 'Home',
    isPublic: true
  }
]
