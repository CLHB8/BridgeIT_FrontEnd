import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from "react-router-dom";


// Neil: Code from https://mdbootstrap.com/docs/react/navigation/footer/
const FooterPage = () => {
    return (
        <MDBFooter color="white" className="font-small" style={{background: "#F5F5F5"}}>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="4">
                            <Link to={'/help'}>Help</Link>
                        </MDBCol>
                        <MDBCol md="4">
                            &copy; {new Date().getFullYear()} BridgeIT GmbH
                        </MDBCol>
                        <MDBCol md="4">
                        <Link to={'/help'}>About Us</Link>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;

