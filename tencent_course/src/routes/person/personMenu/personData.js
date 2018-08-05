import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../../static/css/person/personMenu/personData.less';

export default class personData extends Component {
    render() {
        return (<div className='personData'>
            <div>
                <h3>已选学院</h3>
                <span>初中</span>
                <Icon type='right'/>
            </div>
            <div>
                <h3>手机号</h3>
                <Icon type='right'/>
            </div>
            <div>
                <h3>收货地址</h3>
                <Icon type='right'/>
            </div>
        </div>)
    }
};
