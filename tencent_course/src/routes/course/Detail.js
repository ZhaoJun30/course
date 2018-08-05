import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Icon, Rate} from 'antd';
import Qs from 'qs';
import action from '../../store/action';

import '../../static/css/courseDetail.less';
import {addShopCart, queryInfo,removeShopCart} from "../../api/course";


class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            courseDetail:{}
        }
    }

    async componentDidMount() {
        let {location: {search}} = this.props,
            {courseId = 0} = Qs.parse(search.substr(1)) || {};
        courseId = parseFloat(courseId);
        let courseDetail = (await queryInfo(courseId)).data;
        this.setState({
            courseDetail,
        })
    }

    render() {
        let {shopCart} = this.props;
        let {courseDetail} = this.state;
        console.log(courseDetail);

        return <section className={'courseDetail'}>
            <video
                src='http://59.108.138.11/vedu.tc.qq.com/ALWNc5BZDLYwJdTz_nvTzQSpcKyPKuxaWRtolOnVq3HM/h1417sr62j7.m701.mp4?vkey=A525BC9D5C84C4B4C44BA8F10A495FA50ABF01722E8DFA5381879D2C83270373AC90F90223BB548F3995A6219B9568DE278194317571B6C914BF4C015332F3C7A61F5424BBD8EDD4A2346CE32E2F8C8205331CC8BB67B06048BEF9DC3DBE35ED698A3DC102B017FF2EBCFCA01658C50524D27ED73355E083&br=16&platform=2&fmt=auto&level=0&sdtfrom=v3010&guid=53a1cd62d82011f9c4257f6e25c2ba41'
                controls preload={'none'} poster={courseDetail.scr}/>

            <div className="detailSelect">
                <NavLink to={'/course/detail'}>详情</NavLink>
                <NavLink to={'/course/detail/mulu'}>目录</NavLink>
                <NavLink to={'/course/detail/about'}>相关课程</NavLink>
            </div>

            <div className="courseDescribe">
                <div className="courseTitle">
                    <h2>{courseDetail.title}</h2>

                    <p className={'courseEvaluate'}>
                        <span>最近在学{courseDetail.online}人</span>
                        <span>累计报名{courseDetail.total}万人</span>
                        <span>好评度{courseDetail.reputation}%</span>
                    </p>

                    {courseDetail.tips && courseDetail.tips.length !== 0 ? <p className={'courseCategory'}>
                        <span>{courseDetail.tips[0]}</span>
                        <span>{courseDetail.tips[1]}</span>
                        <span>{courseDetail.tips[2]}</span>
                        <span>{courseDetail.tips[3]}</span>
                    </p> : null}

                    <span className={'coursePrice'}>{courseDetail.price}</span>
                </div>

                <div className="teacherIntroduce">
                    <h2>老师介绍 <span></span></h2>
                    <section>
                        <div className="teacherDetail">
                            <div>
                                <img src={courseDetail.likeness} alt=""/>
                            </div>
                            <div>
                                <h3>{courseDetail.teacher}</h3>
                                <p>好评度: {courseDetail.t_reputation}%</p>
                                <p>课程数: {courseDetail.classNumber}</p>
                                <p>学生数: {courseDetail.studentNumber}</p>
                            </div>
                        </div>
                        <div className="teacherIntroduce">
                            <p>{courseDetail.intro}</p>
                        </div>
                    </section>
                </div>

                <div className="courseIntroduce">
                    <h2>课程详情</h2>
                    {courseDetail.detail?<div>
                        {courseDetail.detail.map((item,index)=>{
                            return <img src={item} alt="" key={index}/>
                        })}
                    </div>:''}
                </div>
                <div className="studentReviews">
                    <h2 className={'clearfix'}>学员评论
                        <span>更多
                            <Icon type="right"/>
                        </span>
                    </h2>
                    <ul>
                        <li className={'clearfix'}>
                            <div className={'userName'}>
                                <span>{courseDetail.s_name}</span>
                                <Rate/>
                            </div>

                            <p className={'reviewContent'}>
                                {courseDetail.talk_show}
                            </p>
                            <span className="reviewTime">2018-01-24</span>
                        </li>
                    </ul>
                </div>
            </div>

            {shopCart.unpay.find((item) => {
                return courseDetail.id === item.id
            }) ? <div className="signUp clearfix">
                <div className={'signUpCollect'}>
                    <Icon type="heart-o"/>
                    <br/>
                    收藏
                </div>
                <div className={'signUpCollect'}>
                    <Icon type="customer-service"/>
                    <br/>
                    咨询
                </div>
                <div className={'unSignUpBtn'} onClick={this.removeCourse}>
                    取消报名
                </div>
            </div> : <div className="signUp clearfix">
                <div className={'signUpCollect'}>
                    <Icon type="heart-o"/>
                    <br/>
                    收藏
                </div>
                <div className={'signUpCollect'}>
                    <Icon type="customer-service"/>
                    <br/>
                    咨询
                </div>
                <div className={'signUpBtn'} onClick={this.addCourse}>
                    立即报名
                </div>
            </div>}
        </section>
    }

    addCourse = async () => {
        let result = await addShopCart(this.state.courseDetail.id);
        if (parseFloat(result.code) === 0) {
            this.props.queryUnpay();
        }
    };

    removeCourse = async () =>{
        let result = await removeShopCart(this.state.courseDetail.id);
        if (parseFloat(result.code) === 0) {
            this.props.queryUnpay();
        }
    }
}

export default connect(state => state.course, action.course)(Detail);