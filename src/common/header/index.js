import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoWrapper,
    SearchArrow
} from './style'


 
class Header extends Component {

    getListInfo = () => {
        const { focused, hotList } = this.props;
        if(focused) {
            return (
                <SearchInfo>
                    <SearchArrow></SearchArrow>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoWrapper>
                        {
                            hotList.map(item => <SearchInfoItem key={item}>{item}</SearchInfoItem>)
                        }
                    </SearchInfoWrapper>
                </SearchInfo>
            );
        } 
    
        return null;
    }

    render () {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className="iconfont">&#xe6cf;</i>
                        { this.getListInfo() }
                    </SearchWrapper>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">Aa</NavItem>
                </Nav>
                <Addition>                    
                    <Button className="reg">注册</Button>
                    <Button className="writting">写文章</Button>
                </Addition>
            </HeaderWrapper>
        )

    }


}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
        hotList: state.header.get('hotList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);