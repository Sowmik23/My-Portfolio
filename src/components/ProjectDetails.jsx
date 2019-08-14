import React, { Component } from 'react'

import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class ProjectDetails extends Component {
    render() {
        return (
            <div className="projects-grid">

    
                {/* Project 01*/}
                <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                    <CardTitle style={{
                        color: 'black', height: '176px', background:
                            'url(data:image/png;base64,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) center / cover'
                    }
                    }>React Project #01</CardTitle>
                    <CardText>
                    React is a JavaScript library for building user interfaces.
                        It is maintained by Facebook and a community of individual developers
                            and companies. During learning React I made some projects & and these are here.
                    </CardText>
                    <CardActions border>
                            <a href="https://github.com/Sowmik23/ReactJs" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 02*/}
                <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                    <CardTitle style={{
                        color: 'black', height: '176px', background:
                            'url(data:image/png;base64,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) center / cover'
                    }
                    }>React Project #02</CardTitle>
                    <CardText>
                    React is a JavaScript library for building user interfaces.
                        It is maintained by Facebook and a community of individual developers
                            and companies. During learning React I made some projects & and these are here.
                    </CardText>
                    <CardActions border>
                            <a href="https://github.com/Sowmik23/ReactJs" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=ZDNAMa73tcU" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 03*/}
                <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>

                    <CardTitle style={{
                        color: 'black', height: '176px', background:
                            'url(data:image/png;base64,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) center / cover'
                    }
                    }>React Project #03</CardTitle>
                    <CardText>
                        React is a JavaScript library for building user interfaces.
                        It is maintained by Facebook and a community of individual developers
                            and companies. During learning React I made some projects & and these are here.
                    </CardText>
                    <CardActions border>
                            <a href="https://github.com/Sowmik23/ReactJs" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
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
}

export default ProjectDetails
