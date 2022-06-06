import React from 'react'

function Portfolio() {
    return (
        <div className="container" id="projectCards">
            <h1>My Portfolio</h1>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body img1">
                        <h4 className="card-title">
                            <strong>Weather Dashboard</strong>
                        </h4>
                        <p className="card-text">A dashboard using the OpenWeather API where users can search for weather data in any city.</p>
                        <a href="https://kvpang.github.io/weather-dashboard/" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
                        <a href="https://github.com/KVPang/weather-dashboard" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body img2">
                        <h4 className="card-title">
                            <strong>Note Taker</strong>
                        </h4>
                        <p className="card-text">Users can create and save notes through their web browser.</p>
                        <a href=" https://note-taker-0120.herokuapp.com/" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
                        <a href="https://github.com/KVPang/note-taker" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-column text-white text-right" id="users"></div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body img3">
                        <h4 className="card-title">
                            <strong>Password Generator</strong>
                        </h4>
                        <p className="card-text">Generate a random secure password between 8 to 128 characters</p>
                        <a href="https://kvpang.github.io/password-generator/" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
                        <a href="https://github.com/KVPang/password-generator" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="card justify-content-center">
                    <div className="card-body img4">
                        <h4 className="card-title">
                            <strong>Workday Scheduler</strong>
                        </h4>
                        <p className="card-text">A calendar application which allows users to enter and save tasks, notes, or events on their web browser.</p>
                        <a href="https://kvpang.github.io/work-day-scheduler/" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
                        <a href="https://github.com/KVPang/work-day-scheduler" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>

                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card justify-content-center">
                    <div className="card-body img5">
                        <h4 className="card-title">
                            <strong>Employee Tracker</strong>
                        </h4>
                        <p className="card-text">A CLI application for building and maintaining an employee database.</p>
                        <a href="https://github.com/KVPang/employee-tracker" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
                        <a href="https://github.com/KVPang/employee-tracker" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card justify-content-center">
                    <div className="card-body img6">
                        <h4 className="card-title">
                            <strong>BuddyGram</strong>
                        </h4>
                        <p className="card-text">A social app for users to post invites to events.</p>
                        <a href="https://safe-mesa-41776.herokuapp.com/login" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
                        <a href="https://github.com/framenolan/buddygram" className="expbtn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio
