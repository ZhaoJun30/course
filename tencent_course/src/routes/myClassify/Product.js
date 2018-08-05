import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navBox' >
                <a href='javascript:;' className='h2'>平面设计</a>
                <ul>
                    <li><a href="javascript:;">电商美工</a></li>
                    <li><a href="javascript:;">综合平面</a></li>
                    <li><a href="javascript:;">摄影后期</a></li>
                </ul>
                <a href='javascript:;' className='h2'>UI设计</a>
                <ul>
                    <li><a href="javascript:;">交互设计</a></li>
                    <li><a href="javascript:;">游戏 UI设计</a></li>
                    <li><a href="javascript:;">Web UI设计</a></li>
                    <li><a href="javascript:;">APP UI设计</a></li>
                    <li><a href="javascript:;">图标设计</a></li>
                    <li><a href="javascript:;">其他<i /></a></li>
                </ul>
            </div>
        )
    }
};
export default withRouter(connect()(Product));