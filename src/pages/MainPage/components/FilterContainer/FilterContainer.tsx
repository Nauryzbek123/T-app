import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './FilterContainer.css';

const categories = [
    'Books & Notes',
    'Keys',
    'Phones',
    'Documents',
    'Accessories',
    'Bags',
    'Headphones',
    'Watch',
];

const types = ['found', 'lost'];

interface FiltersProps {
    filter: {
        title: string;
        type: string;
        category: string;
        location: string;
        startDate: string;
        endDate: string;
    };
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onFindClick?: () => void;
}

const FilterContainer: React.FC<FiltersProps> = ({ filter, onFilterChange, onFindClick }) => {
    return (
        <div className="filters">
            <Row className="align-items-center">
                <Col>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search by Title"
                            name="title"
                            value={filter.title}
                            onChange={onFilterChange}
                            size="lg"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" onClick={onFindClick} size="lg">Find</Button>
                </Col>
            </Row>
            <h3 className="mt-5 mb-3">Filters</h3>
            <Row className="align-items-center mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            name="type"
                            value={filter.type}
                            onChange={onFilterChange}
                            className="mr-2"
                        >
                            <option value="all">All</option>
                            {types.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            as="select"
                            name="category"
                            value={filter.category}
                            onChange={onFilterChange}
                            className="mr-2"
                        >
                            <option value="all">All</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={filter.location}
                            onChange={onFilterChange}
                            className="mr-2"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    value={filter.startDate}
                                    onChange={onFilterChange}
                                    className="mr-2"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={filter.endDate}
                                    onChange={onFilterChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="mt-4 mb-4"/>
        </div>
    );
};

export default FilterContainer;
