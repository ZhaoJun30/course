import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect, NavLink, Switch, Route } from 'react-router-dom';
import List from '../course/List';

class Design extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section>
            <div className='navBox'>
                <h3 className='h2'>互联网产品</h3>
                
                <ul>
                    <li><Link to='/course/courseList'>产品策划</Link></li>
                    <li><Link to='/course/courseList'>产品运营</Link></li>
                    <li><Link to='/course/courseList'>游戏策划</Link></li>
                    <li><Link to='/course/courseList'>游戏运营</Link></li>
                    <li><Link to='/course/courseList'>新媒体营销</Link></li>
                    <li><Link to='/course/courseList'>更多<i /></Link></li>
                </ul>
                <a href='javascript:;' className='h2'>互联网营销</a>
                <ul>
                    <li><Link to='/course/courseList'>淘宝营销</Link></li>
                    <li><Link to='/course/courseList'>跨境营销</Link></li>
                    <li><Link to='/course/courseList'>微信营销</Link></li>
                    <li><Link to='/course/courseList'>京东营销</Link></li>
                    <li><Link to='/course/courseList'>拼多多</Link></li>
                    <li><Link to='/course/courseList'>其他<i /></Link></li>
                </ul>
            </div>
        </section>)
    }
}

export default withRouter(connect()(Design))