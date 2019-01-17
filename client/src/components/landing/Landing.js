import React, {Component} from 'react';

import News from './News';

class Landing extends Component {
    render() {
        return(
            <div style={{height: '200vh', maxWidth: '100vw'}}>
                <News />
            </div>
        );
    }
}

export default Landing;