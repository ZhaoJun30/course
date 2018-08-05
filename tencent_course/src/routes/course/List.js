import React from 'react';
import {connect} from 'react-redux';
import {Carousel, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';
import action from '../../store/action/index';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {isLoading: false};
    }

    async componentDidMount() {
        let {queryBanner, bannerData, courseData, queryList} = this.props;
        if (!bannerData || bannerData.length === 0) {
            queryBanner();//=>DISPATCH
        }
    }

    componentWillReceiveProps() {
        //=>在当前案例中，触发这个生命周期函数，说明传递给组件的属性改变了（路由重新渲染或者是REDUX容器中的状态改变了）
        this.setState({isLoading: false});
    }

    render() {
        let {bannerData, courseData} = this.props;


        return <div className='listBox'>
            {/*轮播图*/}
            {bannerData && bannerData.length !== 0 ? (<Carousel autoplay>
                {bannerData.map((item, index) => {
                    let {title,scr} = item;
                    return <div key={index}><img src={scr} alt={title}/></div>
                })}
            </Carousel>) : ''}
        </div>;
    }
}

export default connect(state => ({...state.course}), action.course)(List);