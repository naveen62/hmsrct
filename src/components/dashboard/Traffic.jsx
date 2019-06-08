import React from "react";
import '../../styles/traffic.scss'

const Traffic = props => {
  return (
    <div className="card" style={{ border: "1px solid #BDBDBD" }}>
      <div className="card-header">Traffic</div>
      <div className="card-body">
        <div className="traffic-card-container">
          <div className="traffic-card-contains">
              <div className='traffic-infos'>
                <div className='row'>
                    <div className="col-sm">
                        <div className='traffic-info' style={{
                            borderLeft:'.25rem solid #FF7043',
                            borderRadius:5
                        }}>
                            <p>New Clients</p>
                            <p className='traffic-info-no'>9,987</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='traffic-info' style={{
                            borderLeft:'.25rem solid #7E57C2',
                            borderRadius:5
                        }}>
                            <p>New Clients</p>
                            <p className='traffic-info-no'>9,987</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='traffic-info' style={{
                            borderLeft:'.25rem solid #26C6DA',
                            borderRadius:5
                        }}>
                            <p>New Clients</p>
                            <p className='traffic-info-no'>9,987</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='traffic-info' style={{
                            borderLeft:'.25rem solid #4CAF50',
                            borderRadius:5
                        }}>
                            <p>New Clients</p>
                            <p className='traffic-info-no'>9,987</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className='traffic-stats'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm'>
                                    <div className='stats-week'>
                                        Monday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'25%',background:'red'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Tuesday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'60%',background:'#3F51B5'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Wednesday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'30%',background:'#D81B60'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Thursday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'70%',background:'#03A9F4'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Friday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'66%',background:'#00BCD4'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Sataday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'70%',background:'#03A9F4'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Sunday
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'95%',background:'#d32f2f'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm'>
                                    <div className='stats-week'>
                                        Male
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'20%',background:'#283593'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className='stats-week'>
                                        Female
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" style={{width:'80%',background:'#EF6C00'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
      </div>
    </div>
  );
};
export default Traffic;
