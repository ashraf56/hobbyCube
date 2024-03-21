import React from 'react';
import './Community.css'
import imgss from '../../assets/community.svg'
import imgss2 from '../../assets/Group 99.svg'
import topimg from '../../assets/Group 77.svg'
const Community = () => {
  return (
    <div style={{ padding: '100px', position: 'relative' }}>
      <div>
        <h1 className='' style={{ fontStyle: 'italic', fontWeight: '600' }}> your <span style={{ color: '#0096C8', fontSize: '36px' }}>hobby</span> your <span style={{ color: '#8064A2' }}> passion</span></h1>
      </div>
      <button className='getstartedbtn'>Get started</button>

      <div className='d-flex flex-column ' style={{ position: 'absolute', right: '5%' }}>
        <img src={topimg} width={50} height={50} />
        <span className='sp'>Go to top (Ctrl+Home)</span>
      </div>
      <div className='d-none d-lg-flex  ' style={{ marginTop: '121px' }}>

        
        
      </div>
      <div className='d-block d-lg-none' style={{ marginTop: '121px' }}>

       
      </div>

    </div>
  );
};

export default Community;