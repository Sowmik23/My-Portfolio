import React, { Component } from 'react'
import templateBuilder from '@babel/template';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import ProjectDetails from './ProjectDetails';


export class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }


    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                // <div><h1>This is C/C++</h1></div>

                <div className="projects-grid">

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                                'url(data:image/png;base64,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) center / cover'
                        }
                        }>C Project #01</CardTitle>
                        <CardText>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Sowmik23/C_Project-1-2" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=y5mc-tfs0rw&t=16s" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=y5mc-tfs0rw&t=16s" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }

        else if (this.state.activeTab === 1) {
            return (
                // <div><h1>This is Java</h1></div>
                <div className="projects-grid">

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                                'url(data:image/png;base64,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) center / cover'
                        }
                        }>Java Project #01</CardTitle>
                        <CardText>
                        Code of Java project using socket programming, thread, class, inheritence etc in 2nd year
                         1st semeter. I made this project after learning Java language in 2nd year 1st semester. This project
                         was simple-tax calculation system. You can Learn details in video demo.

                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Sowmik23/Java_Project-2-1" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=7pKLI8yfx6g&t=12s" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=7pKLI8yfx6g&t=12s" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                                'url(data:image/png;base64,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) center / cover'
                        }
                        }>Java Project #02</CardTitle>
                        <CardText>
                        Code of Java project using socket programming, thread, class, inheritence etc in 2nd year
                         1st semeter. I made this project after learning Java language in 2nd year 1st semester. This project
                         was simple-tax calculation system. You can Learn details in video demo.

                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Sowmik23/Java_Project-2-1" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=7pKLI8yfx6g&t=12s" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=7pKLI8yfx6g&t=12s" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                // <div><h1>This is Arduino</h1></div>
                
                <div className="projects-grid">

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTqg6fppsRea2XCXpZbXZj-pfUOT1CswEvZS6DnTBDbWKco2z) center / cover'
                        }
                        } >Arduino Project #01</CardTitle>
                        <CardText>
                        This is a simple Microcontroller lab project using Arduino Uno. I made this project
                         after learning details about Microcontrollers in 3rd year 1st semester and 3rd year 2nd semester. This project
                         was simple-Garbage Collector Robot Demo. You can Learn details in video demo.
                           
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Sowmik23/Microcontroller_Lab-3-1" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                // <div><h1>This is React</h1></div>
                <ProjectDetails/>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                // <div><h1>This is HTML/CSS/JavaScript</h1></div>
                
                <div className="projects-grid">

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                            'url(https://i.udemycdn.com/course/240x135/673420_5279_3.jpg) center / cover'
                        }
                        } >HTML/CSS/JS Project #01</CardTitle>
                        <CardText>
                        During ( 3rd year 1st semester) learning HTML/CSS and JavaScript I made some project and practise  and these codes are here.
                    </CardText>
                    <CardActions border>
                            <a href="https://github.com/Sowmik23/Software-Engineering-3-1" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                 </div>   
            )
        }
        else if (this.state.activeTab === 5) {
            return (
                // <div><h1>This is Android</h1></div>

                <div className="projects-grid">

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlilRv4ZiY6ivG9vO8CjSbGR7AuxPps6gTHAelSn7MGESmbyl) center / cover'
                        }
                        } >Android Project #01</CardTitle>
                        <CardText>
                        During ( 2nd year 2nd semester) learning a lot about Android in Application development
                        labm and  I made some project and practise codes and these codes are here. I made an app name 
                        Railway Guide. You can Learn more details in video demo.
                    </CardText>
                    <CardActions border>
                            <a href="https://github.com/Sowmik23/RailwayGuide" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=3JXZzrCd-PE&t=11s" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=3JXZzrCd-PE&t=11s" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
            
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 01*/}
                    <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                        <CardTitle style={{
                            color: 'black', height: '176px', background:
                            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlilRv4ZiY6ivG9vO8CjSbGR7AuxPps6gTHAelSn7MGESmbyl) center / cover'
                        }
                        } >Android Project #02</CardTitle>
                        <CardText>
                        During ( 2nd year 2nd semester) learning a lot about Android in Application development
                        labm and  I made some project and practise codes and these codes are here. I made an app name 
                        Railway Guide. You can Learn more details in video demo.
                    </CardText>
                    <CardActions border>
                            <a href="https://github.com/Sowmik23/RailwayGuide" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=3JXZzrCd-PE&t=11s" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=3JXZzrCd-PE&t=11s" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                 </div>                
            )
        }
        // else if (this.state.activeTab === 6)
        //     return (
        //         <div><h1>This is Oracle</h1></div>
        //     )
        // }
        // else if (this.state.activeTab === 7)
        //     return (
        //         <div><h1>This is Oracle</h1></div>
        //     )
        // }
        // else if (this.state.activeTab === 8) {
        //     return (
        //         <div><h1>This is MATLAB</h1></div>
        //     )
        // }
        // else if (this.state.activeTab === 9) {
        //     return (
        //         <div><h1>This is Latex</h1></div>
        //     )
        // }
        // else if (this.state.activeTab === 10) {
        //     return (
        //         <div><h1>This is Hacking</h1></div>
        //     )
        // }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>C/C++</Tab>
                    <Tab>Java</Tab>
                    <Tab>Arduino</Tab>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS/JavaScript</Tab>
                    <Tab>Android</Tab>
                    <Tab>Oracle</Tab>
                    <Tab>Networking</Tab>
                    <Tab>MATLAB</Tab>
                    <Tab>Latex</Tab>
                    <Tab>Hacking</Tab>
                </Tabs>

                {/* <section className="projects-grid"> */}

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

                {/* </section> */}
            </div>
        )
    }
}

export default Projects
