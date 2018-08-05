import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
import '../../static/css/courseList.less';
import action from '../../store/action';

let data = [
    ['互联网', 'UI设计', '出国留学', '财汇金融', '考研', '兴趣'],
    ['Linux运维', 'Python自动化运维', 'DevOps', '信息安全', '其他'],
    ['交互设计', '游戏UI设计', 'Web UI设计', 'APP UI设计', '图标设计', '其他'],
    ['雅思', '托福', 'K12留学', '研究生留学', '留学指导'],
    ['会计职称', '注册会计师', '国家证书', '金融功从业', '会计实务操作', '其他财经类考试'],
    ['规划指导', '考研英语', '考研政治', '考研数学', '专业课', '其他'],
    ['体育休闲', '健身训练', '舞蹈健美', '武术格斗', '其他'],
    ['']
];

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maskLayer: false,
            isRun: 0,
            data: data,
            index: 7,
            isLoading: false,
        }
    }

    async componentDidMount() {
        let {listData, queryList} = this.props;
        if (listData.data.length === 0) {
            queryList();
        }
    }



    componentWillReceiveProps() {
        this.setState({isLoading: false});
        /*let {listData}= this.props;
        this.setState({listData});
        console.log(2);*/
    }

    loadMore = () => {
        let {queryList, listData, courseType} = this.props;
        if (this.state.isLoading) return;
        this.setState({isLoading: true});

        queryList({
            page: listData.page + 1,
            type: courseType,
            flag: 'push'
        })
    };

    render() {
        let {listData} = this.props;
        
        return <section>
            <div className='nav-CD'>
                <ul className='nav-menu' onClick={this.moveClick}>
                    <li className='nav-Synthesize' index={1}>
                        综合排序<Icon type={this.state.isRun === 1 ? 'up' : 'down'} index={1}/>
                    </li>
                    <li className='nav-Product' index={2}>
                        产品策划<Icon type={this.state.isRun === 2 ? 'up' : 'down'} index={2}/>
                    </li>
                    <li className='nav-Screen' index={3}>
                        筛选<Icon type={this.state.isRun === 3 ? 'up' : 'down'} index={3}/>
                    </li>
                </ul>

                <ul className='nav-synthesize-box' style={{display: this.state.isRun === 1 ? 'block' : 'none'}}>
                    <li className='active'>综合排序</li>
                    <li>人气排序</li>
                    <li>价格最低</li>
                    <li>价格最高</li>
                </ul>

                <div className='tabBox' style={{display: this.state.isRun === 2 ? 'block' : 'none'}}>
                    <ul className='tabBox-nav' ref='bb' onClick={ev => {
                        [].forEach.call(this.refs.bb.children, (item, index) => {
                            item.className = '';
                            if (ev.target.tagName === 'LI') ev.target.className = 'active';
                        })
                    }}>
                        <li className='active'><Icon type='bars'/>全部</li>
                        <li><Icon type='desktop'/>IT</li>
                        <li><Icon type='edit'/>设计</li>
                        <li><Icon type='laptop'/>语言</li>
                        <li><Icon type='idcard'/>职业</li>
                        <li><Icon type='solution'/>升学</li>
                        <li><Icon type='camera-o'/>兴趣</li>
                    </ul>
                    <ul className='tabBox-nav tabBox-nav-2' onClick={this.handleClick} ref='aa'>
                        <li className='active' index={6}>全部</li>
                        {
                            this.state.data[0].map((item, index) => {
                                return <li key={index} index={index}>{item}</li>
                            })}
                    </ul>
                    <ul className='tabBox-nav-3'>
                        <li className='active'>全部</li>
                        {
                            this.state.data[parseFloat(this.state.index)].map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>

                <div className='nav-screen-Box' style={{display: this.state.isRun === 3 ? 'block' : 'none'}}>
                    <div className='topBox'>
                        <ul className='curriculum-type'>
                            <h3>课程类型</h3>
                            <li>随到随学</li>
                            <li>正在直播</li>
                            <li>系列课</li>
                        </ul>
                        <ul className='price-range'>
                            <h3>价格区间</h3>
                            <li>免费</li>
                            <li>￥50以下</li>
                            <li>￥50-100</li>
                            <li>￥100-500</li>
                            <li>￥500-1000</li>
                            <li>￥1000以上</li>
                        </ul>
                        <ul className='curriculum-content'>
                            <h3>课程内容包含（可多选）</h3>
                            <li>直播授课</li>
                            <li>录播视频</li>
                            <li>课程资料</li>
                            <li>习题测试</li>
                            <li>试听</li>
                        </ul>
                    </div>
                    <ul className='removal-filter'>
                        <a href="javascript">清空筛选</a>
                        <li>确定</li>
                    </ul>
                </div>

            </div>
            
            {listData.data.map((item, index) => {
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
            {listData.total <= listData.page ? '' : (<Button onClick={this.loadMore}
                                                             type={'default'}
                                                             loading={this.state.isLoading}>加载更多数据</Button>)}
        </section>;
    }


    moveClick = ev => {
        let index = parseFloat(ev.target.getAttribute('index')),
            {isRun, maskLayer} = this.state;
        this.setState({
            isRun: index,
            maskLayer: !maskLayer
        });
        if (maskLayer) {
            this.setState({
                isRun: 0,
            })
        }

    };
    handleClick = ev => {
        let target = ev.target,
            tarTag = target.tagName;
        if (tarTag === 'LI') {
            [].forEach.call(this.refs.aa.children, (item, index) => item.className = '');
            target.className = 'active';
            let index = target.getAttribute('index');
            this.setState({
                index: parseFloat(index) + 1
            })
        }
    }
}


export default withRouter(connect(state => ({...state.course}), action.course)(CourseList));