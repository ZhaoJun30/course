import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon} from 'antd';


class NavBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <footer className='footerNavBox'>
            <NavLink to='/course'>
                <Icon type='home'/>
                <span>首页</span>
            </NavLink>
            <NavLink to='/classify'>
                <Icon type="appstore-o"/>
                <span>分类</span>
            </NavLink>
            <NavLink to='/mycourse'>
                <Icon type='solution'/>
                <span>课程表</span>
            </NavLink>
            <NavLink to='/person'>
                <Icon type='user'/>
                <span>我的</span>
            </NavLink>
        </footer>;
    }
}

export default withRouter(connect()(NavBottom));