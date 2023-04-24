import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <Container className="AC">
      <Container>
        <Container>
          <Row>
            <Col className="abtContent">
              <Image
                className="me"
                src="https://media.licdn.com/dms/image/D5603AQHrE3XYLe6TZQ/profile-displayphoto-shrink_800_800/0/1681836028297?e=1687996800&v=beta&t=xk8AYYil5AscW0cQY8amKbMS4GfBfkk7ejDcIuZMo7A"
                alt="Marc Salaver"
              />

              <Col>
                <p>
                  I am a passionate full stack web developer with a proven track
                  record of completing projects both from scratch and on
                  WordPress for clients. I have honed my skills through a coding
                  bootcamp offered by the UCR extension program, where I gained
                  expertise in HTML, CSS, Javascript, ReactJS, React bootstrap,
                  and JQuery. While I also have some experience with MySQL, I am
                  particularly comfortable working with MongoDB. Collaboration
                  is one of my strengths, and I thrive on partnering with others
                  to create impressive projects that exceed expectations. In
                  addition to my technical abilities, I am also passionate about
                  music and cooking. As a dedicated and innovative developer, I
                  am excited to leverage my skills to make a meaningful impact
                  and contribute to cutting-edge projects.
                </p>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
