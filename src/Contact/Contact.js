import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="mt-5 pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="hr-right-contact col-lg-12">
                            <div data-aos-duration="1800" className="hr-left-contact col-lg-12">
                                <h1 className="main-tit">Get in touch</h1>
                                <p className="sec-tit">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
                                <div className="row">
                                    <div data-aos-duration="1800" className="hm-left-contact text-center col-lg-6">
                                        <div className="mt-3">
                                            <h1 className="third-tit"><i class="fas fa-phone-alt"></i></h1>
                                            <p className="forth-tit">Interested in Carsify’s software? Just pick up the phone to chat with a member of our sales team.</p>
                                            <h4 className="forth-tit">+212 665834628</h4>
                                        </div>

                                    </div>

                                    <div data-aos-duration="1800" className="hm-left-contact col-lg-6">
                                        <div className="mt-3">
                                            <h1 className="third-tit"><i class="far fa-envelope"></i></h1>
                                            <p className="forth-tit">Sometimes you need a little help from your friends. Or a Carsify support rep. Don’t worry… we’re here for you.</p>
                                            <button className="sendMail m-auto"><a style={{ color: "white" }} rel="noreferrer" target="_blank" href="mailto:yahyabouhsine@yahoo.com">Send Email</a></button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
