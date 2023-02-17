import React from 'react';
import { API_URL } from '../../config/apiurl';

const Coffegoodsitem = ({item2}) => {
    return (
        <ul className='coffeecss2'>
            <li className='coldbrewitem'>
                {item2.map(item=><div key={`${item.p_no}`}><img src={`${API_URL}/upload/${item.p_img}`} alt=""/>
                <p className='cpname'>{item.p_name}</p>
                <p className='cpprice'>{item.p_price}원</p></div>)}
            </li>
        </ul>
    );
};

export default Coffegoodsitem;