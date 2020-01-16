import React, {Component} from 'react';
import {Button, Icon, Input} from 'antd';
import './styles.css';
import {connect} from "react-redux";
import * as loginAction from "../../redux/actions/loginAction";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    componentDidMount() {
        console.log('---------->', this.props);
    }

    login = () => {
        // let token = true;
        let RedirectUrl = this.props.location.state ? this.props.location.state.from.pathname : '/';
        this.props.login({userName: '123', password: '123'});
        this.props.history.push(RedirectUrl);

    };

    render() {
        return (
            <div className='container'>
                <div className='bg_modal'>
                    <div className='login_box'>
                        <h3>Login</h3>
                        <h3>{this.props.userInfo.token && '已登录！'}</h3>
                        <div className='line'/>
                        <div className='info_item'>
                            <Icon type={'user'} style={{fontSize: '24px', color: 'rgba(0,0,0,0.3)'}}/>
                            <Input className='info_input' placeholder={'user name'}/>
                        </div>
                        <div className='info_item'>
                            <Icon type={'lock'} style={{fontSize: '24px', color: 'rgba(0,0,0,0.3)'}}/>
                            <Input className='info_input' placeholder={'user name'}/>
                        </div>
                        <Button type='danger' className='login_btn' onClick={() => this.login()}>登录</Button>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.login
});

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(loginAction.Login(data))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
