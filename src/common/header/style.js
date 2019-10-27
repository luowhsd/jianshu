import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 58px;
    width: 100px;
    background-image: url(${require('../../static/image/logo.png')});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 58px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        line-height: 30px;
        width: 30px;
        border-radius: 15px;
        text-align: center;
        
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 40px 0 20px;
    border-radius: 19px;
    margin-top: 10px;
    margin-left: 20px;
    outline: none;
    border: none;
    background: #eee;
    font-size: 14px;
    color: #666;
    &.focused {
        width: 300px;
    }
    &.focused + .iconfont {
        background: #969696;
        color: #fff;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    border-radius: 4px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background-color: white;
`

export const SearchArrow = styled.span`
    position: absolute;
    top: -5px;
    left: 60px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: white;
    transform: rotate(45deg);

`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-heigth: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`

export const SearchInfoWrapper = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: inline-block;
    float: left;
    line-height: 20px;
    font-size: 12px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #333;


`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 58px;
`

export const Button = styled.div`
    float: right;
    margin-top: 10px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;

    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
   