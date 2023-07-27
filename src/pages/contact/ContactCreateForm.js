import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import styles from "../../styles/ContactCreateForm.module.css";
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
        console.log(contactData)
        try {
          await axiosReq.post("/contact/", contactData);
          history.push("/contactconfirmation");
        } catch (err) {
          // console.log('ERROR in submit: ', err)
          setErrors(err.response?.data);
        }
      };

    return (
        <Row className={styles.Row}>
            <Col>
                <Container className={styles.Content}>
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
                            className={`${btnStyles.Button} ${btnStyles.Black}`}
                            onClick={() => history.goBack()}
                        >
                            cancel
                        </Button>
                        <Button className={`${btnStyles.Button} ${btnStyles.Black}`} type="submit">
                            submit
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );

};

export default ContactCreateForm;