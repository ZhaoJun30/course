import React from 'react';
import {connect} from 'react-redux';
import {Modal} from 'antd';
import {Link} from 'react-router-dom';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';
import action from '../../store/action/index';
import '../../static/css/person/login.less';

const QQLogo = require('../../static/images/person/logo.png');

function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 3000);
}


class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return <section className='personLoginBox'>
            <div className={'QQlogo'}>
                <img src={QQLogo} alt=""/>
            </div>

            <form>
                <input type="text" placeholder={'请输入你的QQ号码'}/>

                <input type="password" placeholder={'请输入你的QQ密码'}/>

                <button onClick={this.toLogin}>登 &nbsp;&nbsp;&nbsp;  录</button>
                <div className={'clearfix'}>
                    <Link to={'/person/info'}>返回</Link>
                    <Link to={'/person/register'}>注册新账号</Link>
                </div>
            </form>
        </section>;
    }

    toLogin = async ev => {
        ev.preventDefault();
        let target = ev.target,
            PSE = target.previousElementSibling,
            password = PSE.value,
            userId = PSE.previousElementSibling.value;

        if (password !== '' && userId !== '') {
            password = md5(password);
            let result = await login({
                name: userId,
                password
            });

            console.log(result);
            if (parseFloat(result.code) === 0) {
                this.props.queryUserInfo();
                this.props.history.go(-1);
                return;
            }
            loginFail();
        }

    }

}

export default connect(null,action.person)(Login);