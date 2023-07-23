import React from "react";
import styles from "../../styles/ContactCreateForm.module.css";
import appStyles from "../../App.module.css";
import { Col, Row, Container, Image } from "react-bootstrap";

const ContactConfirmation = () => {
    return (
        <Row className={styles.Row}>

            <Col>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Thank you</h1>
                    <p className={styles.Content}>We have received your message and will be in touch soon!</p>
                    <Image
                        className={`${appStyles.FillerImage}`}
                        src={"https://res.cloudinary.com/dafz5mtkx/image/upload/v1690112999/pexels-gratisography-519_wk9i96.jpg"}
                    />
                </Container>

            </Col>


        </Row >
    );
};

export default ContactConfirmation;