import React, { useEffect } from 'react';
import { Container, Button, Navbar, Nav, Accordion } from 'react-bootstrap';
import './style.css';

const Home = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.containerHome');
    const starCount = 100; // Number of stars

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 5 + 2; // Size between 2px and 7px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      star.style.top = `${Math.random() * 100}vh`; // Random vertical position
      star.style.animation = `dance ${Math.random() * 2 + 1}s infinite`; // Random dance duration
      starContainer.appendChild(star);
    }
  }, []);
  
  return (
    <>
      {/* <div className="dancing-stars"></div> */}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Startup Weekend Rosario 2024</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="https://www.instagram.com/swrosario_/" target="_blank"><i className="bi bi-instagram"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='containerHome'>

        <div className="container text-center my-5">
          <h1>Save the Date!</h1>
          <h2>November 6-8, 2024</h2>
          <Button
            href="https://www.eventbrite.com"
            target="_blank"
            variant="primary"
            size="lg"
          >
            ¡Quiero participar!
          </Button>
        </div>
      
      <div id="faq" className="container my-5">
        <h2>FAQs</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Startup Weekend?</Accordion.Header>
            <Accordion.Body>
              Startup Weekend is a global grassroots movement of active and empowered entrepreneurs who are learning the basics of founding startups and launching successful ventures.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Who can participate?</Accordion.Header>
            <Accordion.Body>
              Anyone with an idea, a skill, or a passion for entrepreneurship! We welcome developers, designers, and business enthusiasts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What do I need to bring?</Accordion.Header>
            <Accordion.Body>
              Bring your laptop, business cards, and an open mind. We'll provide the rest!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className='text-center'>
            <Accordion.Header>¿Dónde nos encontramos?</Accordion.Header>
            <Accordion.Body>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0387443943046!2d-60.64057492359555!3d-32.949986472058534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1a51783971%3A0x9612d0b26b23de!2sCentro%20Cultural%20Roberto%20Fontanarrosa!5e0!3m2!1ses-419!2sar!4v1727203569888!5m2!1ses-419!2sar" 
              width="100%" 
              height="450" 
              style={{ maxWidth: '600px', border: 'none' }} 
              allowFullScreen 
              loading="lazy" 
              title="mapa" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    </>
  )
}

export default Home