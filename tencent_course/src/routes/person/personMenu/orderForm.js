import React, { Component } from 'react';
import '../../../static/css/person/personMenu/orderForm.less';
import { queryShopCart, removeShopCart } from '../../../api/course';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '../../../store/action';

class orderForm extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            addCourse: [],
        }
    }
    async componentWillMount() {
        let addCourse = (await queryShopCart(0)).data;
        this.setState({
            addCourse,
        });
    }

    render() {
        let { addCourse } = this.state;
        return (<div className='order-form'>
            {addCourse.map((item, index) => {
                let { scr, organization_info, organization, price, online, intro, id } = item;
                return <div className='course' key={index}>
                    <div className='headerBox'>
                        <h1>{organization}</h1>
                        <span>报名成功</span>
                    </div>
                    <div className='bodyBox'>
                        <Link to={`/course/detail?courseId=${id}`}>
                            <img src={scr} alt={intro} />
                            <h3>{organization_info}</h3>
                            <p>{organization}</p>
                            <i>{price}</i>
                            <span>{online}人最近学习</span>
                        </Link>
                    </div>
                    <div className='footer'>
                        <a href="javascript:;" className="remove" onClick={this.removeClick} index={id}>取消报名</a>
                        <a href="javascript:;" className="evaluate">评价课程</a>
                    </div>
                </div>
            })}

        </div>)
    }
    removeClick = async ev => {
        let id = parseFloat(ev.target.getAttribute('index'));
        console.log(id)
        let result = await removeShopCart(id);
        if (parseFloat(result.code) === 0) {
            this.props.queryUnpay();
            this.setState({
                addCourse: (await queryShopCart(0)).data,
            })
        }
    }

};
export default connect(state => state.course, action.course)(orderForm);