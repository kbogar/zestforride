import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import styles from "../../styles/ContactCreateForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function ContactCreateForm() {
    useRedirect('loggedOut');
    const [errors, setErrors] = useState({});

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const { name, email, subject, message } = contactData;
    const history = useHistory();

    const handleChange = (event) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);

        try {
            const { data } = await axiosReq.post('/contact/', formData);
            history.push(`/contact/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Row className={styles.Row}>
            <Col>
                <Container className={`${appStyles.Message}`}>
                    <h1 className={styles.Header}>Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.name?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.email?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="subject"
                                value={subject}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.subject?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={6}
                                name="message"
                                value={message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors?.message?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            onClick={() => history.goBack()}
                        >
                            cancel
                        </Button>
                        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                            submit
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );

};

export default ContactCreateForm;