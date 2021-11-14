import React from 'react'

const Searchbar = () => {
    return (
        <>
            <div className="bg-light">
                <div className="container content-space-2">
                    <div className="text-center mx-md-auto">
                        <div className="row justify-content-lg-between">
                            <div className="mb-5">
                                <span className="text-cap">Subscribe</span>
                                <h2>Get the latest from Front</h2>
                            </div>


                            <form className="w-50 m-auto my-3">

                                <div className="input-card d-flex rounded-pill">
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter email" aria-label="Enter email" />
                                    <button type="button" className="btn btn-primary btn-lg rounded-pill">Subscribe</button>
                                </div>

                            </form>

                            <p className="small">You can unsubscribe at any time. Read our <a href="#">privacy policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar
