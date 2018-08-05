import React from 'react';
import { connect } from 'react-redux';
import '../static/css/Classify.less';
import { Link, Redirect, Route, NavLink, Switch } from 'react-router-dom';
import Design from './myClassify/Design';
import Product from './myClassify/Product';
import lan from './myClassify/Language';
import Work from './myClassify/Work';
import Study from './myClassify/Study';
import Interest from './myClassify/Interest';
import CourseList from './course/CourseList';


class Classify extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section className='classify'>
            <div className='nav' onClick={this.handleClick}>
                <ul>
                    <li><NavLink to='/classify/Design'>IT·互联网</NavLink></li>
                    <li><NavLink to='/classify/Product'>设计·创作</NavLink></li>
                    <li><NavLink to='/classify/lan'>语言·留学</NavLink></li>
                    <li><NavLink to='/classify/Work'>职业·考证</NavLink></li>
                    <li><NavLink to='/classify/Study'>升学·考研</NavLink></li>
                    <li><NavLink to='/classify/Interest'>兴趣·生活</NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route path='/CourseList' component={CourseList} />
                <Route path='/classify/Design' component={Design} />
                <Route path='/classify/Product' component={Product} />
                <Route path='/classify/lan' component={lan} />
                <Route path='/classify/Work' component={Work} />
                <Route path='/classify/Study' component={Study} />
                <Route path='/classify/Interest' component={Interest} />
                <Redirect to='/classify/Design'/>
            </Switch>
        </section>
    }
}

export default connect()(Classify);