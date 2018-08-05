import React from 'react';
import {connect} from 'react-redux';
import '../static/css/reset.min.css'
import '../static/css/mycourse.less';
import {Link} from 'react-router-dom';


class Mycourse extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let myCourse = this.props.shopCart.unpay;

        return <section className='myCourseBox'>
            <div className='timeLineBox'>
                <p className='top'>今天上课</p>
                <p className='footer'>
                    <span className='time-m'><i>3</i>分钟</span>
                    <i></i>
                    <span>赶紧开始上课吧！</span>
                    <button>时长兑奖励</button>
                </p>
            </div>
            {myCourse !== [] ? <ul>
                {myCourse.map((item, index) => {
                    let {title, scr, id} = item;
                    return <Link key={index} to={`/course/detail?courseId=${id}`}>
                        <li className='clearfix'>
                            <img src={scr} alt=""/>
                            <h2>{title}</h2>
                            <p>开始学习：第1节 贪吃蛇CANVAS小游戏开发</p>
                            <div className='bairight'>
                                <div className='baifenbi'>5%</div>
                                <p>已学习</p>
                            </div>
                        </li>
                    </Link>
                })}
            </ul> : ''}

            <p className='nomore'>没有更多数据了</p>
        </section>
    }
}

export default connect(state => state.course, null)(Mycourse);