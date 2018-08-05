import React from 'react';
import { connect } from 'react-redux';
import {withRouter, Link } from 'react-router-dom';
import action from '../store/action'


class Search extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section className={'searchBox'}>
            <Link to={'/course'}>
                <i className={'logo'} />
            </Link>
            <input type="text"
                   placeholder="搜索:平面设计/职业技能/英语/架构课/实战课程/编程语言/高中"
                   className={'searchInput'}
                   onKeyUp={ev=>this.searchCourse(ev)}/>
        </section>
    }

    searchCourse=(ev)=>{
        if(ev.keyCode!==13) return;
        let target=ev.target;
        if(target.value==='') return;
        let courseType=['编程语言','平面设计','职业技能','高中','英语','实战课程','架构课'];
        let type;
        for (let i = 0; i < courseType.length; i++) {
            if(target.value===courseType[i]){
                type=i+1;
            }
        }
        if(typeof type === 'number'){
            this.props.searchList({type});
            let {history,location} = this.props;
            if(location.pathname!=='/course/searchList'){
                history.push('/course/searchList')
            }
        }
        target.value='';
    };
}

export default withRouter(connect(state=>state.course,action.course)(Search));