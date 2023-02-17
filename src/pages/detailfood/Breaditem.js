import React from 'react';
import { API_URL } from '../../config/apiurl';


const Breaaditem = ({item}) => {
    console.log(item);
    return ( 
        <ul className='coffeecss'>
            <li className='coldbrewitem'>
                {item.map(item=><div key={`${item.f_no}`}><img className='cold_brew' src={`${API_URL}/upload/${item.f_img}`} alt=""/>
                <p className='cpname'>{item.f_name}</p>
                <p className='cpprice'>{item.f_price}원</p></div>)}
            </li>
        </ul>
    
    );
};

export default Breaaditem;