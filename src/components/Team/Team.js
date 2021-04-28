import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {strTeam,strTeamBadge,idTeam,strSport} = props.team;

    return (
            <Col sm={4}>
                <Card border="primary" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={strTeamBadge} alt={strTeam} />
                <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text> Sports Type: {strSport} </Card.Text>
                <Card.Text><Link to={`/details/${idTeam}`}><Button variant="primary">Explore</Button></Link></Card.Text>
                </Card.Body>
                </Card>
                
            </Col>
    );
};

export default Team;