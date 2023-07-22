import React from 'react';
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Event = (props) => {
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
            console.log(err);
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
            console.log(err);
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
            console.log(err);
        }
    };

    return (
        <Card className={styles.Event}>
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
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
                {name && <Card.Title className='text-center'>{name}</Card.Title>}
                {date && <Card.Title className='text-center'>{date}</Card.Title>}
                {time && <Card.Title className='text-center'>{time}</Card.Title>}
                {event_details && <Card.Text>{event_details}</Card.Text>}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own post!</Tooltip>}>
                            <i className='fa-regular fa-thumbs-up' />
                        </OverlayTrigger>
                    ) : interested_id ? (
                        <span onClick={handleNotInterested}>
                            <i className={`fa-regular fa-thumbs-up ${styles.Thumbs}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleInterested}>
                            <i className={`fa-regular fa-thumbs-up ${styles.ThumbsOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger placement='top' overlay={<Tooltip>Log in to be interested!!</Tooltip>}>
                            <i className='fa-regular fa-thumbs-up' />
                        </OverlayTrigger>
                    )}
                    {interested_count}
                    
                </div>
            </Card.Body>
        </Card>
    );


};

export default Event;