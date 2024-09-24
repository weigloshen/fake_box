import { IconMore as MR } from '@douyinfe/semi-icons';
import { Avatar, Button, Space, Table, Tooltip } from '@douyinfe/semi-ui';
import SC from '../../assets/收藏.svg'
import FX from '../../assets/分享.svg'
import LJ from '../../assets/链接.svg';
import { useState } from 'react';
import Icon from '@douyinfe/semi-icons-lab';
import CustomDropdown from '../../Custom/CustomDropdown';
const DATAROW = [
    {
        key: 0,
        name: 'Semi Design 设计稿.fig',
        nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
        updateName: '姜鹏志',
        size: '2M',
        operate: true
    },
    {
        key: 1,
        name: 'Semi Design 快速上手.doc',
        nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
        updateName: '郝宣',
        size: '1.8M',
        operate: true
    },
    {
        key: 2,
        name: 'Semi Design 快速上手.doc',
        nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
        updateName: '郝人',
        size: '0个文件',
        operate: true
    }
];


function HoverTooltip() {
    return <>
        <CustomDropdown items={[
            { label: "删除", icon: null, modalConfig: { title: '确认要删除本条数据吗', type: "warning" } }
        ]} trigger='click'>
            <Button>
                <Icon svg={<MR />} size="extra-large" />
            </Button>
        </CustomDropdown>
        <Tooltip content={"添加收藏"}> <Button>
            <Icon svg={<SC />} size="extra-large" />
        </Button></Tooltip>
        <Tooltip content={"创建链接并分享"}> <Button>
            <Icon svg={<FX />} size="extra-large" />
        </Button></Tooltip>
        <Tooltip content={"共享"}>
            <Button>
                <Icon svg={<LJ />} size="extra-large" />
            </Button>
        </Tooltip>
    </>
}
export default function ContentTable() {
    const [data, setData] = useState(DATAROW)
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            render: (text: string, record: { [key: string]: string }) => {
                return (
                    <div>
                        <Avatar
                            size="small"
                            shape="square"
                            src={record.nameIconSrc}
                            style={{ marginRight: 12 }}
                        ></Avatar>
                        {text}
                    </div>
                );
            },
        },
        {
            title: '已更新',
            dataIndex: 'updateName',
        }, {
            title: '大小',
            dataIndex: 'size',
            render: (text: string, record: { [key: string]: string }) => {
                return record.operate ? text : <Space spacing={15}>
                    <HoverTooltip />
                </Space>;
            },
        },

    ];
    const falseOperate = (key: number) => {
        const newDataSource = [...data];
        if (key != null) {
            const idx = newDataSource.findIndex(data => data.key === key);

            if (idx > -1) {
                newDataSource[key].operate = false;
                setData(newDataSource);
            }
        }
    }
    const trueOperate = (key: number) => {
        const newDataSource = [...data];
        if (key != null) {
            const idx = newDataSource.findIndex(data => data.key === key);

            if (idx > -1) {
                newDataSource[key].operate = true;
                setData(newDataSource);
            }
        }
    }
    const onRow = (_: never, index: number) => {
        return {
            onClick: () => { }, // 点击行
            onMouseEnter: () => {
                falseOperate(index)
            }, // 鼠标移入行
            onMouseLeave: () => {
                trueOperate(index)
            }, // 鼠标移出行
            className: '',
            // ...
            // 其他可以作用于 tr 的属性或事件
        };
    }

    return (
        <Table dataSource={data} columns={columns} onRow={onRow} rowSelection pagination={false} sticky />
    )
}
