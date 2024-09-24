

import { Nav } from '@douyinfe/semi-ui';
import HelpIcon from '@icon/box.svg';
import Files from '@icon/file.svg';
import Click from '@icon/shizhong.svg';
import Notes from '@icon/notes.svg';
import Transh from '@icon/lajixiang.svg';
import App from '@icon/chuangjianyingyong.svg';
import Zdy from '@icon/zdy.svg';
import Icon from '@douyinfe/semi-icons-lab';
export default function SiderView() {

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <Nav
                    style={{ height: "100%" }}
                    items={[
                        { itemKey: 'user', text: '所有文件', icon: <Icon svg={<Files />} /> },
                        { itemKey: 'union', text: '最新访问', icon: <Icon svg={<Click />} /> },
                        { itemKey: 'union-management1', text: '任务管理', icon: <Icon svg={<Notes />} /> },
                        { itemKey: 'union-management2', text: '应用程序', icon: <Icon svg={<App />} /> },
                        { itemKey: 'union-management3', text: '垃圾箱', icon: <Icon svg={<Transh />} /> },
                        {
                            itemKey: 'union-management4', text: '自定义', icon: <Icon svg={<Zdy />} />,
                            items: ['任务管理', '用户任务查询'],
                        },

                    ]}
                    onSelect={key => console.log(key)}
                    header={{
                        logo: <Icon svg={<HelpIcon />} size="large" />,
                        text: '  运营后台',
                        style: {
                            paddingTop: '15px',
                            paddingBottom: '15px'
                        }
                    }}
                    footer={{
                        collapseButton: true,
                        style: { width: '100%' }

                    }}
                />
            </div>
        </>
    )
}
