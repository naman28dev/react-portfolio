import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {dataabout,meta,worktimeline,skills,} from "../../content_option";
import { useParams, useLocation } from 'react-router-dom';

export const Project = () => {
//   const { projectId } = useParams();
//   const { search } = useLocation();
//   const queryParams = new URLSearchParams(search);
//   const name = queryParams.get('name');
//   const projectDescription = queryParams.get('description');
//   const projectLink = queryParams.get('link');
const { id, name, description} = useParams();
const fullURL = window.location.href;
const parts = fullURL.split('/');
  const githubLink = parts[parts.length - 1];
  const decodedGitHubLink = decodeURIComponent(githubLink);
  console.log(decodedGitHubLink);
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {`Project | ${id}`}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About {name}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Summary on the project - {name}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Project Repository Link</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                <tr>
                    <th scope="row">{decodedGitHubLink}</th>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
