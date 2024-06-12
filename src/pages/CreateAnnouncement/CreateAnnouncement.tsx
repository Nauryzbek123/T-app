import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAnnouncement.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Item, FormData } from "../../utils/interfaces";
import { SERVICE_URL } from "../../config";

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

const CreateAnnouncement: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        title: '',
        category: categories[0],
        type: 'lost',
        description: '',
        location: '',
        date: '',
        images: []
    });

    useEffect(() => {
        if (id) {
            const fetchAnnouncement = async () => {
                try {
                    const response = await axios.get(`${SERVICE_URL}/api/item/${id}`);
                    const announcement: Item = response.data.data;
                    setFormData({
                        title: announcement.title,
                        category: announcement.category,
                        type: announcement.type,
                        description: announcement.description || '',
                        location: announcement.location,
                        date: announcement.date,
                        images: []
                    });
                } catch (error) {
                    console.error('Error fetching the announcement:', error);
                }
            };
            fetchAnnouncement();
        }
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setFormData({
            ...formData,
            images: files
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (id) {
                await axios.put(`${SERVICE_URL}/api/item/${id}`, formData);
            } else {
                await axios.post(`${SERVICE_URL}/api/items`, formData);
            }
            navigate('/');
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <Container style={{ maxWidth: '1238px', padding: '20px' }} className="mb-5">
            <h1 className="my-4 text-center">{id ? 'Edit Announcement' : 'Create Announcement'}</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="title">
                            <Form.Label>Title*</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                // minLength={16}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="category">
                            <Form.Label>Category*</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="description">
                            <Form.Label>Description*</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="type">
                            <Form.Label>Type*</Form.Label>
                            <Form.Control
                                as="select"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                            >
                                <option value="lost">Lost</option>
                                <option value="found">Found</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="location">
                            <Form.Label>Location*</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Group controlId="date">
                            <Form.Label>Date*</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="mb-3">
                        <Form.Group controlId="images">
                            <Form.Label>Images</Form.Label>
                            <Form.Control
                                type="file"
                                id="images"
                                name="images"
                                onChange={handleImageUpload}
                                multiple
                            />
                            <div className="image-preview mt-2">
                                {formData.images.map((image, index) => (
                                    <img key={index} src={URL.createObjectURL(image)} alt="Preview" className="img-thumbnail" />
                                ))}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <Button variant="primary" type="submit" className="px-5">
                            {id ? 'Update' : 'Create'}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default CreateAnnouncement;
