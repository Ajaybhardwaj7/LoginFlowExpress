import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {logout} from '../api/http-config';

export default class HomeComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='home'>
                <div className='head'>
                    <h3>Kepler-452b Mission <span>(Restricted Access)</span></h3>
                    <RaisedButton primary={true} onClick={logout} style={{height:36}}>LOGOUT</RaisedButton>
                    </div>
                <div className='desc'>
                <p>NASA's Kepler mission has confirmed the first near-Earth-size planet in the “habitable zone” around a sun-like star. This discovery and the introduction of 11 other new small habitable zone candidate planets mark another milestone in the journey to finding another “Earth.” </p>
                <p>The newly discovered Kepler-452b is the smallest planet to date discovered orbiting in the habitable zone -- the area around a star where liquid water could pool on the surface of an orbiting planet -- of a G2-type star, like our sun. The confirmation of Kepler-452b brings the total number of confirmed planets to 1,030.</p>
                <p>On the 20th anniversary year of the discovery that proved other suns host planets, the Kepler exoplanet explorer has discovered a planet and star which most closely resemble the Earth and our Sun," said John Grunsfeld, associate administrator of NASA’s Science Mission Directorate at the agency’s headquarters in Washington. “This exciting result brings us one step closer to finding an Earth 2.0.</p>
                </div>
            </div>
        )
    }
}