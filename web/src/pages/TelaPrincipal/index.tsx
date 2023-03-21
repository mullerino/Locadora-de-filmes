import { Layout, Input } from 'antd';


import styles from './index.module.css'

import { MagnifyingGlass } from "@phosphor-icons/react";
import SideBarLeft from '../../componentes/SideBar';

const { Header, Sider ,Content } = Layout;

const TelaPrincipal = ()=>{
    return (
        <Layout className={styles.sideBar}>
            <Sider>
                <SideBarLeft></SideBarLeft>
            </Sider>
        <Layout className={styles.container}>
            <Header className= {styles.header}>
                <div>
                    <Input
                        placeholder='Buscar'
                        prefix = {<MagnifyingGlass size={18}/>}
                    />
                </div>
            </Header>
            <Content>Content</Content>
        </Layout>
      </Layout>
    )
}

export default TelaPrincipal