import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../../static/css/person/personMenu/inform.less'

export default class inform extends Component {
    render() {
        return (<div className='inform'>
            <div>
                <img src="http://pub.idqqimg.com/pc/misc/files/20171013/4f2b5d263f5645969b6df5b715c20361.png" />
                <span>系统通知</span>
            </div>
            <div>
                <img src="http://pub.idqqimg.com/pc/misc/files/20171013/6da6f2780ac84c219673edf51b17bb3f.png" alt="" />
                <span>干活文章</span>
            </div>
            <div>
                <img src="http://pub.idqqimg.com/pc/misc/files/20171013/68ab5440f8f1477687beb4a20e407c9d.png" alt="" />
                <span>活动</span>
            </div>
        </div>)
    }
};
