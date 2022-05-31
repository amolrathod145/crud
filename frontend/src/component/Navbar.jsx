import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-primary ">
                <div class="container-fluid ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarID">
                        <div class="navbar-nav d-flex justify-content-around">
                            <a className='nav-link' href="">Task</a>
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
