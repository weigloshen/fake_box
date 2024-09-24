import { IconLineHeight, IconList, IconSearch } from "@douyinfe/semi-icons";
import Icon, { IconNotification } from "@douyinfe/semi-icons-lab";
import { Avatar, Card, Input, Nav, Popover, Space, Typography, } from "@douyinfe/semi-ui";
import BZ from "@icon/获取帮助.svg";
import CustomDropdown from "../../Custom/CustomDropdown";
function Demo() {
    const { Text } = Typography;

    return (
        <Card
            title='Semi Design'
            style={{ maxWidth: 360 }}
            headerExtraContent={
                <Text link>
                    更多
                </Text>
            }
        >
            Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
        </Card>
    );
}

export default function HeaderView() {
    const items = [
        { label: '查看个人资料', icon: null },
        { label: '账户设置', icon: null },
        { label: '帮助中心', icon: null },
        { label: 'Divider', icon: null },
        { label: '退出登录', icon: null },
    ];
    return (

        <Nav
            mode={'horizontal'}
            style={{ paddingLeft: "0", paddingBottom: "5px", }}
            items={[
                { itemKey: 'user', icon: <Input style={{ width: 650 }} size="large" suffix={<IconLineHeight />} prefix={<IconSearch />} showClear></Input> },]}
            footer={
                <Space spacing={15}>
                    <Popover content={<Demo />} trigger="click">
                        <Icon type="svg" svg={<BZ />} size="extra-large" />
                    </Popover>
                    <Popover content={<Demo />} trigger="click">
                        <IconList size="extra-large" />
                    </Popover>
                    <Popover content={<Demo />} trigger="click">
                        <IconNotification size="extra-large" />
                    </Popover>
                    <CustomDropdown items={items}>
                        <Avatar color="orange" size="small" style={{ marginRight: "5px" }}>U</Avatar>
                    </CustomDropdown>
                </Space>
            }
        />

    )
}
