import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navBox' >
                <a href='javascript:;' className='h2'>公考求职</a>
                <ul>
                    <li><a href="javascript:;">公务员</a></li>
                    <li><a href="javascript:;">事业单位</a></li>
                    <li><a href="javascript:;">教师考试</a></li>
                    <li><a href="javascript:;">金融银行</a></li>
                    <li><a href="javascript:;">企业招聘/其他招考</a></li>
                </ul>
                <a href='javascript:;' className='h2'>法学院</a>
                <ul>
                    <li><a href="javascript:;">法律硕士</a></li>
                    <li><a href="javascript:;">司法考试</a></li>
                    <li><a href="javascript:;">法律实务</a></li>
                    <li><a href="javascript:;">趣味学法</a></li>
                    <li><a href="javascript:;">警法考试</a></li>
                </ul>
            </div>
        )
    }
};
export default withRouter(connect()(Work));