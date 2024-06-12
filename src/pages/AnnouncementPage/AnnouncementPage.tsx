import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Card, ListGroup, Badge, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from "../../utils/interfaces";
import { SERVICE_URL } from "../../config";
import {getAccessToken, getUserId} from "../../utils/token";

const AnnouncementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get(`${SERVICE_URL}/api/item/${id}`);
        setAnnouncement(response.data.data);
      } catch (error) {
        console.error('Error fetching the announcement:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!announcement) {
    return <p>Announcement not found.</p>;
  }

  // const imageUrl = announcement.images ? Object.values(announcement.images)[0].original_url : '';
  const imageUrl = announcement.images && Object.values(announcement.images)[0]?.original_url ? Object.values(announcement.images)[0].original_url : '';

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleComplete = async () => {
    const token = getAccessToken();
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
          `${SERVICE_URL}/api/item/${id}/complete`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            withCredentials: true
          }
      );

      console.log('Item marked as complete:', response.data);
      // Update the announcement state or refetch the data
        setAnnouncement((prev) => prev ? { ...prev, status: 'completed' } : null);
    } catch (error) {
      console.error('Error marking the item as complete:', error);
    }
  };

  const handleDelete = async () => {
    const token = getAccessToken();
    if (!token) {
      return;
    }

    try {
      const response = await axios.delete(
          `${SERVICE_URL}/api/item/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            withCredentials: true
          }
      );

      console.log('Item deleted:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error deleting the item:', error);
    }
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
      <Container style={{ maxWidth: '1238px', padding: '20px' }} className="mb-5">
        <Row className="mt-4">
          <Col md={6}>
            <Image src={imageUrl} fluid onClick={() => openModal(imageUrl)} />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{announcement.title}</Card.Title>
                <Card.Text>{announcement.description}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Category:</strong> {announcement.category}</ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Type:</strong> <Badge bg={announcement.type === 'Lost' ? 'danger' : 'success'}>{announcement.type}</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item><strong>Location:</strong> {announcement.location}</ListGroup.Item>
                  <ListGroup.Item><strong>Date:</strong> {announcement.date}</ListGroup.Item>
                  {announcement.status === 'completed' && (
                      <ListGroup.Item>
                        <strong>Status:</strong> <Badge bg="success">{announcement.status}</Badge>
                      </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
            {announcement.user?.id == getUserId()?.id && (
                <div className="mt-3 d-flex">
                  <Button variant="primary" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                  </Button>
                  <Button variant="primary" onClick={handleComplete} className="mx-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" /> Complete
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                  </Button>
                </div>
            )}
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Author Information</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Name:</strong> {announcement.user?.name}</ListGroup.Item>
                  <ListGroup.Item><strong>Email:</strong> {announcement.user?.email}</ListGroup.Item>
                  <ListGroup.Item><strong>Phone:</strong> {announcement.user?.phone || 'N/A'}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Body>
            <Image src={modalImage || ''} fluid />
          </Modal.Body>
        </Modal>
      </Container>
  );
};

export default AnnouncementPage;
