import React, { Component } from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import Logo from "../../assets/img/logo.png";
import { ScaleLoader } from "react-spinners";
import Image1 from "../../assets/img/experiment1.png";
import Image2 from "../../assets/img/experiment2.png";
import Image3 from "../../assets/img/experiment3.png";
import Image4 from "../../assets/img/experiment4.png";
import Image5 from "../../assets/img/experiment5.png";
import Image6 from "../../assets/img/experiment6.png";
import Image7 from "../../assets/img/experiment7.png";
import Image8 from "../../assets/img/experiment8.png";
import Image9 from "../../assets/img/experiment9.png";
import Image10 from "../../assets/img/experiment10.png";
import ExperimentItem from "./ExperimentItem/ExperimentItem";
import ExperimentContainer from "./ExperimentContainer/ExperimentContainer";

class Experiments extends Component {
  state = {
    content: (
      <div
        style={{ background: "#000", width: "100vw", height: "100vh" }}
        className="animated slideInLeft d-flex align-items-center justify-content-center flex-column"
      >
        <CardImg
          src={Logo}
          style={{
            maxWidth: "200px",
            animation: "changeColor",
            animationDuration: "5s",
            background: "#000"
          }}
        />
        <h6 className="mt-4 mb-4">Caution: Radioactivity ahead.</h6>
        <ScaleLoader size={20} color="#08fdd8" />
      </div>
    )
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container
              className="d-flex align-items-center"
              style={{
                height: "100%",
                width: "100%",
                marginTop: "50px"
              }}
            >
              <Row style={{ width: "100%" }}>
                <Col xs="12">
                  <h1
                    className="mt-4 animated"
                    style={{ fontSize: "72px", color: "#08fdd8" }}
                  >
                    Experiments
                  </h1>
                </Col>
                <Col xs="12">
                  <p style={{ fontSize: "18px" }}>
                    Sometimes I mess around in my free time...
                  </p>
                </Col>

                <Col
                  style={{
                    marginTop: "150px",
                    height: "100%",
                    width: "100%"
                  }}
                  xs="12"
                >
                  <ExperimentContainer>
                    <ExperimentItem link="https://pvn.surge.sh" img={Image1} />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/rvLEwa"
                      img={Image2}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/RJopLN"
                      img={Image3}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/BxowOM"
                      img={Image4}
                    />
                  </ExperimentContainer>
                  <ExperimentContainer>
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/XqKvNg"
                      img={Image5}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/PezXLP"
                      img={Image6}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/odzKPM"
                      img={Image7}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/yjWVdM"
                      img={Image8}
                    />
                  </ExperimentContainer>
                  <ExperimentContainer>
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/aMPQpz"
                      img={Image9}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/PLJGKP"
                      img={Image10}
                    />
                  </ExperimentContainer>
                </Col>
              </Row>
            </Container>
          )
        }),
      3000
    );
  }
  render() {
    return this.state.content;
  }
}
export default Experiments;
