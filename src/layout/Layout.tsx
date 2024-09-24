
import { Layout } from '@douyinfe/semi-ui';
import SiderView from '../components/sider/SiderView';
import HeaderView from '../components/header/HeaderView';
import ContentView from '../components/content/ContentView';
const LayoutView = () => {
    const { Header, Sider, Content } = Layout;

    return (
        <Layout className="components-layout-demo h-screen">
            <Sider>
                <SiderView />
            </Sider>
            <Layout className=' '>
                <Header >
                    <HeaderView />
                </Header>
                <Content style={{ marginTop: '18px' }}>
                    <ContentView />
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutView