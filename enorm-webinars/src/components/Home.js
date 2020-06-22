import React from 'react'
import Iframe from 'react-iframe'

const Home = () => {

    return (


        <div className="container" >
            <h3 className="center">Webinars with an innovative twist</h3>
            <div className="headerintro">
                <div className="headertext">
                    <h5 className="center head1">At EnoRm we love to share our knowledge with our customers
                    and every now and then we host a webinar and invite those who have intrest. In these webinars
                    we cover topics about new technologies within our workfield and invite one of customers to join
                     the webinar. <br></br>With them we discuss how it is to work with Enorm from start to finish.</h5>
                </div>
                <div className="video">
                    <Iframe className="video1" url="https://www.youtube.com/embed/doFfDfI59o8"
                        frameBorder="0"
                        width="580px"
                        height="280px"
                        id="myId"
                        /*display="initial"*/
                        /*position="right"*/ />
                </div>
            </div>
            <div className="headerContent">
                <h5 className="headerContent">Design</h5>
            </div>
            <div className="contentContainer">
                <img
                    src="/images/thumb1.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
                <img
                    src="/images/thumb2.png"
                    width="350px"
                    height="199.5px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />

                <img
                    src="/images/thumb5.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
            </div>
            <div className="headerContent">
                <h5 className="headerContent">Development</h5>
            </div>
            <div className="contentContainer">
                <img
                    src="/images/thumb4.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
                <img
                    src="/images/thumb3.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
                <img
                    src="/images/thumb6.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />

            </div>
        </div>
    )
}
export default Home