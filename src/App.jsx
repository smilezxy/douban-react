//这是项目的根组件
import  React from "react"
import  ReactDom from "react-dom"
//导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'

//这是导入需要的  ant design 组件
//import { Layout, Menu, Breadcrumb } from 'antd';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

//引入模块化的样式
import styles from "./css/app.scss"

//导入路由相关的组件页面
import HomeContainer from "./components/home/HomeContainer.jsx"
import MovieContainer from "./components/movie/MovieContainer.jsx"
import AboutContainer from "./components/about/AboutContainer.jsx"



export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {

    }
    render () {
        return <HashRouter>
            <Layout className="layout" style={{height:"100%"}}>
                {/*头部区域*/}
                <Header>
                    <div className={styles.logo
                    } />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        //defaultSelectedKeys={window.location.hash.split('/')[1]}
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                {/*中间的内容区域*/}
                <Content style={{background: '#fff' }}>
                    {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    {/*<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>*/}
                    <Route path="/home" component={HomeContainer}></Route>
                    <Route path="/movie" component={MovieContainer}></Route>
                    <Route path="/about" component={AboutContainer}></Route>
                </Content>

                {/*底部区域*/}
                <Footer style={{ textAlign: 'center' }}>
                     Design ©2017 Created by zxy
                </Footer>
            </Layout>
        </HashRouter>
    }
}




