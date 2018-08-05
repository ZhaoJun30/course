import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

/*IMPORT COMPONENT*/
import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';
import Tip from './person/Tip';
import inform from './person/personMenu/inform';//通知
import orderForm from './person/personMenu/orderForm';//订单
import collect from './person/personMenu/collect';//收藏
import personData from './person/personMenu/personData';//个人资料
import balance from './person/personMenu/balance';//余额

class Person extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section>
            <Switch>
                <Route path='/person/info' component={Info} />
                <Route path='/person/login' component={Login} />
                <Route path='/person/register' component={Register} />
                <Route path='/person/inform' component={inform} />
                <Route path='/person/personData' component={personData} />
                <Route path='/person/orderForm' component={orderForm} />
                <Route path='/person/collect' component={collect} />
                <Route path='/person/balance' component={balance} />
                <Redirect from='/person' to='/person/info' />
            </Switch>
        </section>
    }
}

export default connect()(Person);