/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';

/*IMPORT COMPONENT*/
import Item from './component/Item';
import NavBottom from './component/NavBottom';
import GoTop from './component/GoTop';
import Home from './routes/Home';
import Detail from './routes/course/Detail';
import Classify from './routes/Classify';
import Mycourse from './routes/Mycourse';
import Person from './routes/Person';
import courseList from './routes/course/CourseList';
import SearchList from './routes/course/SearchList';


/*RENDER*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                {/*TopItem*/}
                <Item/>

                {/*MAIN=>ROUTE*/}
                <main className='container'>
                    <Switch>
                        <Route path='/course' exact component={Home}/>
                        <Route path='/course/detail' component={Detail}/>
                        <Route path='/course/courseList' component={courseList}/>
                        <Route path='/course/searchList' component={SearchList}/>
                        <Route path='/classify' component={Classify}/>
                        <Route path='/mycourse' component={Mycourse}/>
                        <Route path='/person' component={Person}/>

                        <Redirect to='/course'/>
                    </Switch>
                </main>

                {/*GOTOP*/}
                <Switch>
                    <Route path='/course' exact component={GoTop}/>
                    <Route path='/course/courseList' component={GoTop}/>
                    <Route path='/course/searchList' component={GoTop}/>
                    <Route path='/mycourse' component={GoTop}/>
                </Switch>

                {/*FOOTER*/}
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);