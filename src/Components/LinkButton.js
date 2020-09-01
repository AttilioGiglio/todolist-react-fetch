import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Home0 = () => {

    return (
        <div className='row d-flex justify-content-center align-items-center'style={{height:1000}}>
        <div className='col-3'>
          <Link to='/HOME1'><button className='h1' style={{width:'30rem', height:'10rem', color:'black'}}>TO DO LIST</button></Link>
        </div>
        </div>
    )
}

export default Home0;