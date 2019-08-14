import React, { Component } from 'react'

import {Grid,Cell, ProgressBar} from 'react-mdl'

class Progress extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}> 
                        {this.props.skill} 
                        <ProgressBar style={{margin: 'auto', width: '75%'}} 
                        // progress={this.props.progress}
                        indeterminate
                        /> 
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Progress;
