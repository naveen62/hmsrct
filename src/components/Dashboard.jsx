import React, {useEffect} from "react";
import Navbar from "./dashboard/Navbar";
import "../styles/Dashboard.scss";
import Slide from "./dashboard/Slide";
import CardCount from "./dashboard/CardCount";
import Traffic from "./dashboard/Traffic";
import {history} from '../routes/AppRouter'

const Dashboard = props => {
  useEffect(() => {
    const token = window.localStorage.getItem('userToken');
    if(!token) {
     return history.push('/signin')
    }
  },[])
  return (
    <div className="bg-dashboard">
      <Navbar />
      <Slide />
      <div className="dashboard-container">
        <div className='container'>
            <div className="row">
                <CardCount members='99,987' color='#FF7043' />
                <CardCount members='99,987' color='#7E57C2' />
                <CardCount members='99,987' color='#29B6F6' />
                <CardCount members='99,987' color='#FFEE58' />
            </div>
        </div>
        <div className='container'>
            <Traffic />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
