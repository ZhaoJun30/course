import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {Button} from 'antd';
import '../../static/css/courseList.less';
import action from '../../store/action';


class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRun: 0,
            isLoading: false,
        }
    }

    /*async componentDidMount() {
        let {searchCourse,searchList} = this.props;
        if (searchCourse.data.length === 0) {
            searchList({type:1});
        }
    }*/



    componentWillReceiveProps() {
        this.setState({isLoading: false});
        /*let {listData}= this.props;
        this.setState({listData});
        console.log(2);*/
    }

    loadMore = () => {
        let {searchList,searchCourse} = this.props;
        if (this.state.isLoading) return;
        this.setState({isLoading: true});
        searchList({
            page: searchCourse.page + 1,
            type: searchCourse.type,
        })
    };

    render() {
        let {searchCourse} = this.props;

        return <section>
            {searchCourse.data.map((item, index) => {
                let {title, price, scr, online,id} = item;
                return <Link to={`/course/detail?courseId=${id}`} key={index}>
                    <div className='data-structures' key={index}>
                        <div className='imgBox'>
                            <img src={scr} alt={title}/>
                            <p>{online}已经报名</p>
                        </div>
                        <div className='textBox'>
                            <h3>{title}</h3>
                            {item?item.tips.map((item,index)=>{
                                return <p key={index}>{item}</p>
                            }):null}

                            <span>{price}</span>
                        </div>
                    </div>
                </Link>
            })}

            <div className='mask-layer' style={{display: this.state.maskLayer ? 'block' : 'none'}}
                 onClick={() => this.setState({isRun: 0, maskLayer: !this.state.maskLayer})}></div>
            {searchCourse.total <= searchCourse.page ? '' : (<Button onClick={this.loadMore}
                                                             type={'default'}
                                                             loading={this.state.isLoading}>加载更多数据</Button>)}
        </section>;
    }
}


export default withRouter(connect(state => ({...state.course}), action.course)(CourseList));