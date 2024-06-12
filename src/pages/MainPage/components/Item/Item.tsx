import React from 'react';
import { Card, Badge, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css';
import {ItemProps} from "../../../../utils/interfaces";

const Item: React.FC<ItemProps> = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${item.id}`);
    }; 

    const imageUrl = item.images && Object.values(item.images).length > 0 ? Object.values(item.images)[0].original_url : 'path/to/placeholder/image.png';


    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <Card className="mb-3" style={{ width: '100%' }}>
                <Card.Body>
                    <div className="d-flex">
                        <Image src={imageUrl} rounded style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        <div className="px-4 flex-grow-1">
                            <Card.Title>{item.title}</Card.Title>
                            <Badge bg={item.type === 'Lost' ? 'danger' : 'success'}>{item.type}</Badge>
                            <Card.Text className="mt-2">
                                <strong>Category:</strong> {item.category}<br />
                                <strong>Date:</strong> {item.date}<br />
                                <strong>Location:</strong> {item.location}
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
