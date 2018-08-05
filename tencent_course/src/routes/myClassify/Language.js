import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Language extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navBox' >
                <a href='javascript:;' className='h2'>实用英语</a>
                <ul>
                    <li><a href="javascript:;">英语口语</a></li>
                    <li><a href="javascript:;">学术英语</a></li>
                    <li><a href="javascript:;">新概念英语</a></li>
                    <li><a href="javascript:;">青少年英语</a></li>
                    <li><a href="javascript:;">词汇英语</a></li>
                    <li><a href="javascript:;">职场英语</a></li>
                </ul>
                <a href='javascript:;' className='h2'>出国留学</a>
                <ul>
                    <li><a href="javascript:;">雅思</a></li>
                    <li><a href="javascript:;">托福</a></li>
                    <li><a href="javascript:;">K12 留学</a></li>
                    <li><a href="javascript:;">研究生留学</a></li>
                    <li><a href="javascript:;">留学指导</a></li>
                </ul>
            </div>
        )
    }
};
export default withRouter(connect()(Language));