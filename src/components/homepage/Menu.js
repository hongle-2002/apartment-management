import {Menu} from "antd";
import {
    AppstoreOutlined, BankOutlined, BorderBottomOutlined, HomeOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import {useState} from "react";

function AppMenu() {

    const [current, setCurrent] = useState('mail');

    const items = [
        {
            label: 'Trang chu',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Cho thue phong tro',
            key: 'app',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Cho thue can ho',
            key: 'app1',
            icon: <BankOutlined />,
        },
        {
            label: 'Mat bang cho thue',
            key: 'app2',
            icon: <HomeOutlined />,
        },
        {
            label: 'Tin tuc',
            key: 'app3',
            icon: <BorderBottomOutlined />,
        },
        {
            label: 'Nha cho thue',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Menu them
                </a>
            ),
            key: 'alipay',
        },
        {
            label: 'Bang gia',
            key: 'app4',
            icon: <AppstoreOutlined />,
        },
    ];

    const onClickMenu = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClickMenu} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default AppMenu;
