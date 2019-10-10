import React from "react";
import { Drawer, List} from 'antd-mobile';
import { NavBarWrapper } from "./styled";
import IndexApp from "@components/indexApp"
import IndexBanner from "@components/indexBanner";
import IndexMainNav from "@components/indexMainNav";
import IndexSecondNav from "@components/indexSecondNav";
import IndexRaiderNews from "@components/indexRaiderNews";
import IndexLocal from "@components/indexLocal";
import IndexClassify from "@components/indexClassify";
import IndexSport from "@components/indexSport";
import IndexGlobal from "@components/indexGlobal";
import IndexTheme from "@components/indexTheme";
import IndexHero from "@components/indexHero";
import IndexLine from "@components/indexLine";


import {PageContainer} from "@/globalStyled"
import observer from "@lib/observer";
import connect from "./connect";
@connect
class Home extends React.Component {
    constructor() {
        super()
        observer.$on("handleClickShow", this.onOpenChange)
    }
    state = {
        open: false,
    }    

    onOpenChange = () => {
        this.setState({ open: !this.state.open });
    }
    // componentDidMount(){
    //     fetch("/api/api/index?random=1569594156345").then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    // }
    render() {
        const sidebar = (
            <List>
            {["首页", "游侠攻略", "视频", "游记", "目的地", "问答", "圈子", "集市", "民宿营地", "APP"].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                        className="login"
                        multipleLine
                    >登录/注册</List.Item>);
                }
                return (<List.Item key={index}
                    thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >{i}</List.Item>);
            })}
        </List>);
        return (
            <PageContainer>
            <NavBarWrapper>
                <Drawer
                    className="my-drawer"
                    style={{ height:"100%"}}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6'}}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                <IndexApp />
                <IndexBanner />
                <IndexMainNav/>
                <IndexSecondNav/>
                <IndexRaiderNews/>
                <IndexLocal/>
                <IndexClassify/>
                <IndexSport/>
                <IndexGlobal/>
                <IndexTheme/>
                <IndexHero/>
                <IndexLine/>

                
                    </Drawer>
            </NavBarWrapper>
            </PageContainer>)
    }
    componentDidMount() {
        this.props.handleAsyncHomeData()
    }

}

export default Home;