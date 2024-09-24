import { IconMore as MR } from '@douyinfe/semi-icons';
import { Avatar, Button, Input, Modal, Space, Table, Tooltip } from '@douyinfe/semi-ui';
import SC from '../../assets/收藏.svg'
import FX from '../../assets/分享.svg'
import LJ from '../../assets/链接.svg';
import CMM from '../../assets/重命名.svg';
import { useState } from 'react';
import Icon from '@douyinfe/semi-icons-lab';
import CustomDropdown from '../../Custom/CustomDropdown';
interface DataSourceType {
    key: number;
    name: string;
    nameIconSrc: string;
    updateName: string;
    size: string;
    operate: boolean;
}
const DATAROW: DataSourceType[] = [
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

export default function ContentTable() {
    const [data, setData] = useState(DATAROW)
    const [name, setName] = useState("")
    const [key, setKey] = useState<number>()
    const [visible, setVisible] = useState(false)
    const modalClick = (key: number, dname: string) => {
        setVisible(true)
        setName(dname)
        setKey(key)
    }

    const delClick = (key: number) => {
        const newDataSource = [...data];
        if (key != null) {
            const idx = newDataSource.findIndex(data => data.key === key);

            if (idx > -1) {
                newDataSource.splice(idx, 1);
                setData(newDataSource);
            }
        }
    }
    // 修改data里面的name
    const modifyData = () => {
        console.log("key", key, "name", name);

        const newDataSource = [...data];
        if (key != null) {
            const idx = newDataSource.findIndex(data => data.key === key);

            if (idx > -1) {
                newDataSource[key].name = name;
                setData(newDataSource);
            }
        }
        clearModal()
    }
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            render: (text: string, record: DataSourceType) => {
                return (
                    <div>
                        <Avatar
                            size="small"
                            shape="square"
                            src={record.nameIconSrc}
                            style={{ marginRight: 12 }}
                        ></Avatar>
                        {text} {!record.operate ? <Icon onClick={() => modalClick(record.key, text)} svg={<CMM />} size="extra-large" /> : ''}
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
            render: (text: string, record: DataSourceType) => {
                return record.operate ? text : <Space spacing={15}>
                    <CustomDropdown items={[
                        { label: "删除", icon: null, modalConfig: { title: '确认要删除本条数据吗', type: "warning", onOk: () => delClick(record.key) } }
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
    const clearModal = () => {
        setVisible(false)
        setName("")
        setKey(-1)
    }

    return (
        <>
            <Table dataSource={data} columns={columns} onRow={onRow} rowSelection pagination={false} sticky />
            <Modal title="输入新名称"
                visible={visible}
                onOk={modifyData}
                onCancel={clearModal} >
                <Input defaultValue={name} onChange={(value) => {
                    setName(value);
                }} />
            </Modal>
        </>
    )
}
