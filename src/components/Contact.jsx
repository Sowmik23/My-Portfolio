import React, { Component } from 'react'

import {Grid, Cell, List, ListItem, ListItemContent, ListItemAction, Button} from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className = "contact-body">
                <Grid className="contact-grid">

                    {/* First Half */}
                    <Cell col={6}>
                        <h2>Sowmik Sarker</h2>
                        <img 
                            src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                            alt="avater"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hello I am Sowmik Sarker. Want to 
                            contact with me? :) Okay... Get information from here.</p>
                    </Cell>

                    {/* Another Half */}
                    <Cell col={6}>
                        <h2>Contact Me</h2>

                        <hr/>

                        <div className="contact-list">
                            <List>
                                {/* Phone number */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +8801750405780
                                    </ListItemContent>
                                    <ListItemAction>
                                    <a href="https://duo.google.com/?web" rel="noopener noreferrer" target="_blank"><Button raised colored>Call Now</Button></a>
                                    </ListItemAction>
                                </ListItem>

                                {/* Fax */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        +8801750405780
                                    </ListItemContent>
                                    <ListItemAction>
                                    <a href="https://duo.google.com/?web" rel="noopener noreferrer" target="_blank"><Button raised colored>Fax Now</Button></a>
                                    </ListItemAction>
                                </ListItem>

                                {/* Telegram */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-telegram" aria-hidden="true"/>
                                        +8801750405780
                                    </ListItemContent>
                                    <ListItemAction>
                                    <a href="https://web.telegram.org/#/login" rel="noopener noreferrer" target="_blank"><Button raised colored>Telegram</Button></a>
                                    </ListItemAction>
                                </ListItem>

                                {/* Email address */}
                                 <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        me@gmail.com
                                    </ListItemContent>
                                    <ListItemAction>
                                    <a href="https://gmail.com" rel="noopener noreferrer" target="_blank"><Button raised colored>Send Mail</Button></a>
                                    </ListItemAction>
                                </ListItem>

                                {/* Skype address */}
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        MySkypeId
                                    </ListItemContent>
                                    <ListItemAction>
                                    <a href="https://gmail.com" rel="noopener noreferrer" target="_blank"><Button raised colored>Message</Button></a>
                                    </ListItemAction>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact
