import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../../static/css/person/personMenu/balance.less'


export default class balance extends Component {
    render() {
        return (<div className='balance'>
            <div>
                <p>总余额</p>
                <Icon type='pay-circle-o' />
                <span>0.00</span>
            </div>
            <a href="javascript:;">余额说明</a>
            <a href="javascript:;">余额明细</a>
        </div>)
    }
};
