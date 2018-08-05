import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Study extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navBox' >
                <a href='javascript:;' className='h2'>考研</a>
                <ul>
                    <li><a href="javascript:;">规划指导</a></li>
                    <li><a href="javascript:;">考研英语</a></li>
                    <li><a href="javascript:;">考研政治</a></li>
                    <li><a href="javascript:;">考研数学</a></li>
                    <li><a href="javascript:;">专业课</a></li>
                    <li><a href="javascript:;">其他</a></li>
                </ul>
                <a href='javascript:;' className='h2'>大学</a>
                <ul>
                    <li><a href="javascript:;">自考</a></li>
                    <li><a href="javascript:;">专升本</a></li>
                </ul>
                <a href='javascript:;' className='h2'>高中</a>
                <ul>
                    <li><a href="javascript:;">高考备战</a></li>
                    <li><a href="javascript:;">高一</a></li>
                    <li><a href="javascript:;">高二</a></li>
                </ul>
            </div>
        )
    }
};
export default withRouter(connect()(Study));