import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Interest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navBox' >
                <a href='javascript:;' className='h2'>投资理财</a>
                <ul>
                    <li><a href="javascript:;">证券投资</a></li>
                    <li><a href="javascript:;">期权投资</a></li>
                    <li><a href="javascript:;">外汇衍生</a></li>
                    <li><a href="javascript:;">其他</a></li>
                </ul>
                <a href='javascript:;' className='h2'>音乐乐器</a>
                <ul>
                    <li><a href="javascript:;">音乐基础</a></li>
                    <li><a href="javascript:;">唱歌发音</a></li>
                    <li><a href="javascript:;">乐器演奏</a></li>
                    <li><a href="javascript:;">音乐制作</a></li>
                    <li><a href="javascript:;">其他</a></li>
                </ul>
            </div>
        )
    }
};
export default withRouter(connect()(Interest));