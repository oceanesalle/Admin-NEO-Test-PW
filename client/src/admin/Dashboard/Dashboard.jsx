import { useEffect, useContext } from 'react';
import axios from 'axios';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import { UxContext } from '../../contexts/UxContext.js';

const Dashboard = () => {
  const { setMenu } = useContext(UxContext);
  useEffect(() => {
    axios.get('http://localhost:5000/admin', {
      headers: { 'x-access-token': localStorage.getItem('token') },
    });
    setMenu('admin');
  });
  return (
    <>
      <DashboardNavbar />
    </>
  );
};

export default Dashboard;