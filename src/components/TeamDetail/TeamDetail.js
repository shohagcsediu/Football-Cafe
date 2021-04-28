import { faFacebook, faInstagramSquare, faTwitter, faWeebly, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import TopBanner from '../image/top.jpg'
import Founded from '../image/found.png'
import Country from '../image/flag.png'
import Soccer from '../image/football.png'
import Gender from '../image/male-gender.png'
const TeamDetail = () => {

    const { teamId, isGenderMale} = useParams();
    const [team, setTeam] = useState([]);

    const details ={
        padding: '30px 50px',
        color: 'white',
    }
    const banner ={
        textAlign: 'center',
        backgroundImage: `url(${TopBanner})`,
        backgroundSize: 'cover',
        color:'white',
        paddingTop: '10px'
    }
    const social ={
        textAlign: 'center',
        padding: '10px',
        margin: '10px'
    }
    
    const smallImageIcon ={
        width: '20px',
    }

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])
    return (
        <Container fluid>

            <div style={banner}>
               <Image src={team.strTeamBadge} alt={team.strTeam}></Image>
            </div>

          <Row style={details}>

            <Container>
                 <Row>
                    <Col md={6}>
                        <Card bg="primary" style={{ width: '100%', height: '500px'}}>
                            <Card.Img variant="top" src={team.strTeamBanner} alt={team.strTeam} />
                            <Card.Title style={{fontSize: '30px'}}>{team.strTeam}</Card.Title>
                            <Card.Text><img style={smallImageIcon} src={Founded} alt={team.strTeam}></img> Founded: {team.intFormedYear}</Card.Text>
                            <Card.Text><img style={smallImageIcon} src={Country} alt={team.strTeam}></img> Country: {team.strCountry}</Card.Text>
                            <Card.Text><img style={smallImageIcon} src={Soccer} alt={team.strTeam}></img> Sports Type: {team.strSport}</Card.Text>
                            <Card.Text><img style={smallImageIcon} src={Gender} alt={team.strTeam}></img> Gender: {team.strGender}</Card.Text>
                            {isGenderMale && <Card.Img src={team.strTeamJersey} alt={team.strTeam} />}

                            <Card.Text><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> {team.strTwitter} </Card.Text>
                            <Card.Text> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> {team.strFacebook} </Card.Text>
                            <Card.Text> <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> {team.strYoutube} </Card.Text>
                         </Card>

                         <Row style={social}>
                         <a href = {`https://${team.strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> </a>
                         <a href = {`https://${team.strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a>
                         <a href = {`https://${team.strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>  </a>
                         <a href = {`https://${team.strInstagram}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>  </a>
                         <a href = {`https://${team.strWebsite}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWeebly}></FontAwesomeIcon>  </a>
                         </Row>
                     </Col>
                    
                    <Col md={6}>
                             <h2>{team.strTeam}</h2>
                             <h5>{team.strDescriptionEN}</h5>
                    </Col>
                    
                  </Row>
             </Container>
                        
            <Container>
                  <Row>
                                
                    <Col md={6}>
                             <h2>{team.strStadium}</h2>
                             <h4>Capacity: {team.intStadiumCapacity} People</h4>
                             <h4>Location: {team.strStadiumLocation}</h4>
                              <h5>{team.strStadiumDescription}</h5>
                     </Col>
                     <Col md={6}>
                          <Card.Img variant="top" src={team.strStadiumThumb} alt={team.strTeam} />
                     </Col>
                    </Row>
             </Container>
             <Container>
            <Row>
             <Col md={6}>
             <Card.Img src={team.strTeamJersey} alt={team.strTeam} />
                </Col> 
                <Col md={6}>
                <Card.Title> Do your love {team.strTeam}, and looking to show your love wearing our branded jersy. Then order online Jersy of {team.strTeam}. Get free home delivery for two or more product </Card.Title>
                <button style={{textAlign:'center'}}>Order Now</button>
                </Col> 
            </Row>
            </Container>
        </Row>
        </Container>
        
    );
};

export default TeamDetail;