import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-light text-center ">
                    <hr />
                    <div className="container p-4">

                        <section className="mb-4">
                            <a className="btn btn-danger btn-floating m-1" href="https://www.facebook.com/groups/244735440552481" rel="noreferrer" target="_blank" role="button"><i className="fab fa-facebook-f"></i></a>

                            <a className="btn btn-danger btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>

                            <a className="btn btn-danger btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>

                            <a className="btn btn-danger btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>

                            <a className="btn btn-danger btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-danger btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
                        </section>

                        <section className="">
                            <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form5Example2" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-auto">

                                        <button type="submit" className="btn btn-danger mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>

                        <section className="">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-dark">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-dark">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-dark">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-dark">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-dark">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href="https://play.google.com/store/apps/details?id=com.cars.android"><img src="/Images/Google-Play-[remix].gif" alt="gp" width="190px" /></a>
                        </section>

                    </div>

                    <div className="text-center p-3">
                        © 2021 Copyright:
                        <a className="text-dark" href="/Privacy">carsify.ml</a>
                    </div>

                </footer>


            </div>
        )
    }
}

export default Footer
