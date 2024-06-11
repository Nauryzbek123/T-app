import React, { useState } from 'react';
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Items from "./components/Items/Items";
import { Container } from 'react-bootstrap';
import {Item} from "../../utils/interfaces";

const items: Item[] = [
    { id: 4, images: {0: {original_url: require("../../assets/img/mainIcon.png")}}, date: '2023-04-01', title: 'Lost Phone', location: 'Park', type: 'Lost', category: 'Phones' },
    { id: 4, images: {0: {original_url: require("../../assets/img/mainIcon.png")}}, date: '2023-04-01', title: 'Found Keys', location: 'Library', type: 'Found', category: 'Keys' },
];

const MainPage: React.FC = () => {
    const [filter, setFilter] = useState({
        title: '',
        type: '',
        category: '',
        location: '',
        startDate: '',
        endDate: '',
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    const filteredItems = items.filter((item) => {
        return (
            (!filter.title || item.title.toLowerCase().includes(filter.title.toLowerCase())) &&
            (!filter.type || item.type === filter.type) &&
            (!filter.category || item.category === filter.category) &&
            (!filter.location || item.location.toLowerCase().includes(filter.location.toLowerCase())) &&
            (!filter.startDate || !filter.endDate || (item.date >= filter.startDate && item.date <= filter.endDate))
        );
    });

    return (
        <div className="app">
            <Container style={{ maxWidth: '1238px', padding: '20px' }}>
                <FilterContainer filter={filter} onFilterChange={handleFilterChange} />
                <Items items={filteredItems} />
                <div className="pagination">
                    {/* Pagination component will go here */}
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
