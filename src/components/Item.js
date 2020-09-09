import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';

export default function Item(props){
    const counters = props.counters;
    const listItems = counters.map(item => {
        return(
            <div className='my-2' id='item.id'>
                <button className="btn btn-warning" value={item.value}><b>{item.value}</b></button>&nbsp;
                <button className="btn btn-secondary" onClick={() => props.increment(item.id)}><FontAwesomeIcon icon="plus-circle" /></button>&nbsp;
                
                <button disabled={item.value <= 0 ? true: false}className="btn btn-info"><FontAwesomeIcon icon="minus-circle" onClick={() => props.decrement(item.id)}/></button>&nbsp;
                <button className="btn btn-danger" onClick={() => props.remove(item.id)}><FontAwesomeIcon icon="trash" /></button>
            </div>
        )
    })
    return (
        <div>
            {listItems}
        </div>
                
        )
}