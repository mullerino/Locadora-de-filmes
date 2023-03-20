import { Layout, Space } from 'antd';
import styles from './index.module.css'

const { Header, Content } = Layout;

const Homepage = ()=>{
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout className={styles.container}>
                <Header className={styles.header}>
                    <img src="imgs/Logo.png" alt="Logo"/>
                </Header>
                <Content className={styles.content}>
                    <h2>Aqui você encontra os melhores filmes da atualidade. <br></br> Acesse já nossa plataforma!</h2>
                    <button type='button'>
                        Acessar plataforma
                    </button>
                </Content>
            </Layout>
        </Space>
    )
}

export default Homepage