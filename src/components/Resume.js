import React from "react";

const Resume = () => {
    return (
        <div className="resumePage">
            <h1>Resume</h1>
            <div className="container" id="resumeContent">
                <p>
                    Front-end web developer with advancing skills in HTML, CSS and JavaScript. My strengths include problem solving, meeting deadlines, and attention to detail with strong aptitude for project management. I am looking forward to developing responsive websites and have a passion for collaborating with others to accomplish all goals. I thrive in fast-paced environments and I am excited to apply my knowledge and experience while continuing to further develop my skills.
                </p>
                <br/>
                <a href="https://docs.google.com/document/d/16ixMc17ordpjh1S-fWbXzLxdjVfdbb_n1KxAWXU80PE/edit" className="btn-resume" target="_blank" rel="noopener noreferrer">View My Resume</a>
                <br/><br/>
                <p>
                    <strong>I am knowledgable with the following technologies:</strong>
                </p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>SQL</p>
                <p>NoSQL</p>
                <p>MongoDB</p>

            </div>
        </div>
    )
}

export default Resume;
