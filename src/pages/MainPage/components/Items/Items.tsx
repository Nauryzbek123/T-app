import React from 'react';
import Item from '../Item/Item';
import './Items.css';
import {Item as ItemInterface} from '../../../../utils/interfaces'
import { Pagination } from 'antd';

interface ItemsProps {
    items: ItemInterface[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
    return (
        <div className="items-list">
            <h2 className="mb-4">Found {items.length} announcements</h2>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default Items;
