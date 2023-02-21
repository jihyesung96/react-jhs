import React from 'react';
import { API_URL } from '../../config/apiurl';
import { Link } from 'react-router-dom';

const Stumbleritem = ({item}) => {
    return ( 
        <ul className='coffeecss'>
            <li className='coldbrewitem'>
                {item.map(item=><div key={`${item.p_no}`}><Link to={`/Coffee/${item.w_no}`}><img className='cold_brew' src={`${API_URL}/upload/${item.p_img}`} alt=""/></Link>
                <p className='cpname'>{item.p_name}</p>
                <p className='cpprice'>{item.p_price}원</p></div>)}
            </li>
        </ul>
    );
};

export default Stumbleritem;