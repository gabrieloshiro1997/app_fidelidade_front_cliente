import React from 'react';

const Home = React.lazy(() => import('./app/components/home/Home'));
const Resgate = React.lazy(() => import('./app/components/resgate/Resgate'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home },
  { path: '/Resgate', exact: true, name: 'Resgate', component:  Resgate },
];

export default routes;
