import { IconCaretdown } from "@douyinfe/semi-icons";
import { Button, Input, Upload } from "@douyinfe/semi-ui";
import ContentTable from "./ContentTable";
import WJ from "@icon/文件上传.svg";
import WJJ from "@icon/文件夹上传.svg";
import Icon from "@douyinfe/semi-icons-lab";
import CustomDropdown, { Items, ModalConfig } from "../../Custom/CustomDropdown";
import WJJ2 from "@icon/icon_file_type/wenjianleixing-suolvetu-wenjianjia.svg";
import WORD from "@icon/icon_file_type/wenjianleixing-suolvetu-Word.svg";
import PDF from "@icon/icon_file_type/wenjianleixing-suolvetu-PDFwendang.svg";
import YS from "@icon/icon_file_type/wenjianleixing-suolvetu-yasuowenjian.svg";
import "./1.css"


export default function ContentView() {
    const modalConfig = (type: string): ModalConfig => (
        {
            type: 'info', title: '输入名称', icon: null,
            content: (
                <Input addonAfter={type} />
            )
        }
    )
    const items: Items[] = [
        {
            label: '文件上传', icon: <Icon svg={<WJ />} />, modalConfig: {
                type: 'info', title: '文件上传', icon: null,
                content: (
                    <Upload
                        action="https://api.semi.design/upload"
                        draggable={true}
                        dragMainText={'点击上传文件或拖拽文件到这里'}
                        dragSubText="支持任意类型文件"
                    ></Upload>
                )
            }
        },
        {
            label: '文件夹上传', icon: <Icon svg={<WJJ />} />, modalConfig: {
                type: 'info', title: '文件夹上传', icon: null,
                content: (
                    <Upload
                        directory={true}
                        action="https://api.semi.design/upload"
                        draggable={true}
                        dragMainText={'点击上传文件或拖拽文件到这里'}
                        dragSubText="支持任意类型文件"
                    ></Upload>
                )
            }
        },
        { label: 'Divider', icon: null },
        { label: '新建文件', icon: <Icon svg={<WJJ2 />} />, modalConfig: modalConfig("") },
        { label: '新建Word文档', icon: <Icon svg={<WORD />} />, modalConfig: modalConfig(".word") },
        { label: '新建PDF文件', icon: <Icon svg={<PDF />} />, modalConfig: modalConfig(".pdf") },
        { label: '新建压缩文件', icon: <Icon svg={<YS />} />, modalConfig: modalConfig(".zip") },
    ];
    return (
        <nav>
            <div className='header-content'>
                <h1 className=" m-1">所有文件<IconCaretdown /></h1>
                <CustomDropdown items={items}>
                    <Button className="m-1" style={{ width: 85, height: 40 }} theme='light' type='tertiary'>新建 + </Button>
                </CustomDropdown>
            </div>
            <ContentTable />
        </nav>
    )
}

