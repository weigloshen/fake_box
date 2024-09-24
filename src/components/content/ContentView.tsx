import { IconCaretdown } from "@douyinfe/semi-icons";
import { Button } from "@douyinfe/semi-ui";
import ContentTable from "./ContentTable";
import WJ from "@icon/文件上传.svg";
import WJJ from "@icon/文件夹上传.svg";
import Icon from "@douyinfe/semi-icons-lab";
import CustomDropdown, { Items } from "../../Custom/CustomDropdown";
import WJJ2 from "@icon/icon_file_type/wenjianleixing-suolvetu-wenjianjia.svg";
import WORD from "@icon/icon_file_type/wenjianleixing-suolvetu-Word.svg";
import PDF from "@icon/icon_file_type/wenjianleixing-suolvetu-PDFwendang.svg";
import YS from "@icon/icon_file_type/wenjianleixing-suolvetu-yasuowenjian.svg";
import "./1.css"


export default function ContentView() {
    const items: Items[] = [
        {
            label: '文件上传', icon: <Icon svg={<WJ />} />, modalConfig: {
                type: 'info', title: '文件上传', content: <div>
                    <h1>1213123</h1>
                </div>
            }
        },
        { label: '文件夹上传', icon: <Icon svg={<WJJ />} />, directory: true },
        { label: 'Divider', icon: null },
        { label: '新建文件', icon: <Icon svg={<WJJ2 />} /> },
        { label: '新建Word文档', icon: <Icon svg={<WORD />} /> },
        { label: '新建PDF文件', icon: <Icon svg={<PDF />} /> },
        { label: '新建压缩文件', icon: <Icon svg={<YS />} /> },
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

