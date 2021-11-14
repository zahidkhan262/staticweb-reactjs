import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';


const Companylogo = () => {
    const [companyLogo] = useState([{ Cimages: './images/c1.svg' }, { Cimages: './images/c2.svg' }, { Cimages: './images/c3.svg' }, { Cimages: './images/c4.svg' }, { Cimages: './images/c5.svg' }, { Cimages: './images/c6.svg' },])
    return (
        <>
            <div className="company-logo">
                <Container>
                    <Row>
                        {companyLogo.map((logos) => {
                            return (

                                <Col md={2} sm={6} xs={6}>
                                    <div className="c-logo">
                                        <img src={logos.Cimages} />
                                    </div>
                                </Col>

                            )
                        })

                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Companylogo
