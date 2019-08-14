import React, { Component } from 'react'

import {Grid, Cell } from 'react-mdl'
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Progress from './Progress';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>

                    {/* Left Side */}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Sowmik Sarker</h2>
                        <h4 style={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies. React can be used as a base in 
                            the development of single-page or mobile applications, as it 
                            is optimal for fetching rapidly changing data that needs
                            to be recorded.</p>
                        
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>sowmiksarker.2355.csedu@gmail.com</p>
                        <h5>Web</h5>
                        <p>Mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>


                    {/* Right Side */}
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education 
                            startYear={2017}
                            endYear={2021}
                            schoolName="University of Dhaka"
                            schoolDescription="React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies. Undergraduate(B.Sc)"
                        />

                        <Education 
                            startYear={2021}
                            endYear={2022}
                            schoolName="University of Dhaka"
                            schoolDescription="React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies. (M.Sc)"
                        />  

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={2021}
                            endYear={2023}
                            jobName="My First Job Name"
                            jobDescription="React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies."
                        />

                        <Experience
                            startYear={2023}
                            endYear={2026}
                            jobName="My Second Job"
                            jobDescription="React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="Android"
                            progress="100"
                        />

                        <Skills
                            skill="Oracle/SQL"
                            progress="97"
                        />

                        <Skills
                            skill="JavaScript"
                            progress="90"
                        />

                        <Skills
                            skill="Java"
                            progress="85"
                        />


                        <Skills
                            skill="HTML/CSS"
                            progress="80"
                        />

                        <Skills
                            skill="C/C++"
                            progress="80"
                        />

                        <Skills
                            skill="Latex"
                            progress="75"
                        />

                        <Skills
                            skill="Assembly"
                            progress="65"
                        />

                        <Skills
                            skill="Firebase"
                            progress="60"
                        />

                        <Skills
                            skill="NodeJS"
                            progress="10"
                        />

                        {/* <Skills
                            skill="React/Python/programming"
                            progress="100"
                        /> */}

                        {/* Progress Bar with Indeterminate Progress */}
                         <Progress
                            skill ="React"
                         />
                         <Progress
                            skill ="Programming"
                         />
                         <Progress
                            skill ="Python"
                         />
                         <Progress
                            skill ="Hacking"
                         />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume
