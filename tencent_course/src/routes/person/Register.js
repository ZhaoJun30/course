import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Icon, Button, Input, Row, Col, Modal} from 'antd';
import md5 from 'blueimp-md5';
import {register} from '../../api/person';
import action from '../../store/action/index';

/*import css*/
import '../../static/css/person/register.less';

const FormItem = Form.Item;
const QQLogo = require('../../static/images/person/logo.png');

function loginFail() {
    const modal = Modal.error({
        title: '注册失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                values.password = md5(values.password);
                let result = await register(values);
                if (parseFloat(result.code) === 0) {
                    this.props.queryUserInfo();
                    this.props.history.push('/person');
                    return;
                }
                loginFail();
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            }
        };

        return <section className='registerBox'>

            <div className={'QQlogo'}>
                <div>
                    <h2>欢迎注册QQ</h2>
                    <h3>每一天,乐在学习</h3>
                </div>
                <img src={QQLogo} alt=""/>
            </div>
            
            <Form onSubmit={this.handleSubmit} className={'clearfix'}>
                <FormItem {...formItemLayout} label='QQ号码'>
                    {getFieldDecorator('name', {
                        rules: [
                            {required: true, message: '请输入用户名!'}
                        ]
                    })(<Input/>)}
                </FormItem>

                <FormItem {...formItemLayout} label='密码'>
                    {getFieldDecorator('password', {
                        rules: [
                            {required: true, message: '请输入密码!'}
                        ]
                    })(<Input type='password'/>)}
                </FormItem>

                <FormItem {...formItemLayout} label='QQ邮箱'>
                    {getFieldDecorator('email', {
                        rules: [
                            {required: true, message: '请输入邮箱!'},
                            {type: 'email', message: '输入的邮箱格式不正确!'}
                        ]
                    })(<Input/>)}
                </FormItem>

                <FormItem {...formItemLayout} label='手机号'>
                    {getFieldDecorator('phone', {
                        rules: [
                            {required: true, message: '请输入手机号!'}
                        ]
                    })(<Input/>)}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit">立即注册</Button>
                </FormItem>
                
                <Link to={'/person/info'}>还没想好,先不注册...</Link>
            </Form>
        </section>;
    }
}

export default Form.create()(connect(null, action.person)(Register));