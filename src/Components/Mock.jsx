import React, { Component } from 'react';
import Spline from '@splinetool/react-spline';

export class Mock extends Component  {

    render(){
        return (
            <main className='absolute'>
                <Spline scene="https://prod.spline.design/LsLKx4ovusYSVNAM/scene.splinecode" />
            </main>
          );
    }
}
