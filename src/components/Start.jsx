import React, { Component } from 'react'

import {Grid, Cell} from 'react-mdl'

class Start extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>

                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img  
                            src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h2>Full Stack Android & Web Developer</h2>

                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Firebase | MongoDB | Android</p>
                            <div className="social-links">

                                {/* LinkeIn */}
                                <a href="https://www.linkedin.com/in/sowmik-sarker-aa702b169/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/sowmik23" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/channel/UCjy2gGp4ITTUhyiTS31mBdQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                </a>

                            </div>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Start
