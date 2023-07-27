import React from 'react';
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRedirect } from '../../hooks/useRedirect';

const Event = (props) => {
    useRedirect('loggedOut');
    const {
        id,
        owner,
        profile_id,
        profile_image,
        name,
        event_details,
        image,
        date,
        time,
        interested_id,
        interested_count,
        updated_at,
        eventPage,
        setEvents,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleEventDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            history.goBack();
        } catch (err) {
            // console.log(err);
        }
    };

    const handleInterested = async () => {
        try {
            const { data } = await axiosRes.post('/interested/', { event: id });
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? { ...event, interested_count: event.interested_count + 1, interested_id: data.id }
                        : event;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleNotInterested = async () => {
        try {
            await axiosRes.delete(`/interested/${interested_id}`);
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? { ...event, interested_count: event.interested_count - 1, interested_id: null }
                        : event;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Card className={styles.Event}>
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={60} />
                        {owner}
                    </Link>
                    <div className='d-flex align-items-center'>
                        <span>{updated_at}</span>
                        {is_owner && eventPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleEventDelete}
                            />
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/events/${id}`}>
                <Card.Img src={image} alt={name} />
            </Link>
            <Card.Body>
                <Card.Header className={styles.Header}>
                    Event Details
                </Card.Header>
                <hr></hr>
                {name && <Card.Title className='text-center'>{name}</Card.Title>}
                <hr></hr>
                <p>Date and time:</p>
                {date && <Card.Title className='text-center'>{date}</Card.Title>}
                {time && <Card.Title className='text-center'>{time}</Card.Title>}
                <hr></hr>
                {event_details && <Card.Text>{event_details}</Card.Text>}
                <hr></hr>
                <div className={styles.EventBar}>
                    <p>Click on the check box if you are interested!</p>
                    {is_owner ? (
                        <OverlayTrigger placement='top' overlay={<Tooltip>You can't be interested in your own event, sorry!</Tooltip>}>
                            <i className='fa-solid fa-circle-check' />
                        </OverlayTrigger>
                    ) : interested_id ? (
                        <span onClick={handleNotInterested}>
                            <i className={`fa-solid fa-circle-check ${styles.Interested}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleInterested}>
                            <i className={`fa-solid fa-circle-check ${styles.InterestedOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Log in to be interested!!</Tooltip>}>
                            <i className='fa-solid fa-circle-check' />
                        </OverlayTrigger>
                    )}
                    {interested_count}

                </div>
            </Card.Body>
        </Card>
    );


};

export default Event;