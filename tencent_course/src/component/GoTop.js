import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';

let isRun = false;

class GoTop extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
       let _goTop = this.refs.goTop;

        window.onscroll = () => {
            if(document.documentElement.scrollTop>100){
                _goTop.style.display='block';

                _goTop.onclick = function () {
                    if (isRun) {
                        return;
                    }
                    isRun = true;

                    let change = document.documentElement.scrollTop - 0,
                        duration = 500,
                        interval = 17,
                        step = change / duration * interval;
                    let timer = setInterval(() => {
                        let curT = document.documentElement.scrollTop;
                        if (curT === 0) {
                            isRun = false;
                            clearInterval(timer);
                            return;
                        }

                        curT = curT - step;
                        document.documentElement.scrollTop = curT;
                    }, interval);
                };
            }else{
                _goTop.style.display='none';
            }
        };
    }

    render() {
        return <section className={'goTopBtn'} ref={'goTop'}>
            <Icon type="up-circle"/>
        </section>
    }
}



export default withRouter(GoTop);
