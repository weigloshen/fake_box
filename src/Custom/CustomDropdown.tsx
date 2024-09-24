import React, { } from 'react';
import { Dropdown, Modal } from "@douyinfe/semi-ui";
import { DropdownProps } from '@douyinfe/semi-ui/lib/es/dropdown';
import { ModalReactProps } from '@douyinfe/semi-ui/lib/es/modal';
type ModalType = { type: 'confirm' | 'info' | 'success' | 'error' | 'warning' }
export type ModalConfig = ModalReactProps & ModalType;
export type Items = { label: string; icon: JSX.Element | null, directory?: boolean; modalConfig?: ModalConfig };
interface CustomDropdownProps extends Omit<DropdownProps, "render"> {
    items: Items[];
    children?: React.ReactNode;
    dropdownMenuStyle?: React.CSSProperties;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ items, children, dropdownMenuStyle = { padding: '8px' }, ...restProps }) => {
    const modalClick = (item: Partial<Items>) => {
        if (item.modalConfig) {
            Modal[item.modalConfig.type ?? "info"](item.modalConfig)
        }
    }
    return (
        <Dropdown
            position="bottomLeft"
            {...restProps}
            render={
                <Dropdown.Menu
                    style={dropdownMenuStyle}
                >
                    {items.map((item, index) => (
                        <React.Fragment key={index} >
                            {item.label === 'Divider' ? <Dropdown.Divider />
                                : <Dropdown.Item onClick={() => modalClick(item)}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Dropdown.Item>}
                        </React.Fragment>
                    ))}
                </Dropdown.Menu >
            }
        >
            {children}
        </Dropdown >

    );
};

export default CustomDropdown;