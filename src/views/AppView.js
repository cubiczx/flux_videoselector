'use strict';

import React from 'react';

import classnames from 'classnames';
import {
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button,
} from 'react-bootstrap';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1 className="text-center">Cambia de video</h1>
      {[...props.videos.values()].map(video => (
        <h2 key={"title-video-" + video.id} className="text-center">{video.active ? video.title : ''}</h2>
      ))}
    </header>
  );
}

function Main(props) {
  if (props.videos.size === 0) {
    return null;
  }

  return (
    <section id="main">
      <div className="container-fluid">
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="embed-responsive embed-responsive-16by9">
              {[...props.videos.values()].map(video => (
                video.active ? 
                React.createElement("iframe", {
                  key: "iframe-" + video.id,
                  className: "embed-responsive-item",
                  src: "//www.youtube.com/embed/" + video.url + "?rel=0",
                  allowFullScreen: true
                })
                : ''
              ))}
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="text-center">
              <ButtonGroup vertical>
              {[...props.videos.values()].map(video => (
                <Button bsStyle="primary" key={"btn-video-" + video.id} onClick={() => props.onChangeVideo(video.id)}>{video.title}</Button>
              ))}
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
}

function Footer(props) {
  if (props.videos.size === 0) {
    return null;
  }

  return (
    <footer id="footer" className="text-center">
      Footer
    </footer>
  );
}

export default AppView;