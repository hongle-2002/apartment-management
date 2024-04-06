import {Avatar, Button, Select} from "antd";
import {
    LoginOutlined,
    PlusOutlined, RightOutlined, SearchOutlined, StarFilled,
    UserAddOutlined, UserOutlined
} from "@ant-design/icons";
import AppMenu from "./Menu";


const leftMoneyFilter = [
    {label: "Duoi 1 trieu", value: 1},
    {label: "2-3 trieu", value: 1},
    {label: "5-7 trieu", value: 1},
    {label: "10-15 trieu", value: 1},
]

const rightMoneyFilter = [
    {label: "1-2 trieu", value: 1},
    {label: "3-5 trieu", value: 1},
    {label: "7-10 trieu", value: 1},
    {label: "tren 15 trieu", value: 1},
]

const leftAreaFilter = [
    {label: "Duoi 20m2", value: 1},
    {label: "30m2-50m2", value: 1},
    {label: "80m2-100m2", value: 1},
    {label: "120m2-150m2", value: 1},
]

const rightAreaFilter = [
    {label: "20m2-30m2", value: 1},
    {label: "50m2-80m2", value: 1},
    {label: "100m2-120m2", value: 1},
    {label: "tren 150m2", value: 1},
]

const newArticles = [
    {label: "Quy trinh dang ki tam tru", value: 1},
    {label: "Thu tuc cho thue phong tro cho nguoi nguoc ngoai", value: 1},
    {label: "CHo thue phong tro co can dk giay phep khong?", value: 1},
    {label: "Meo tim phong tro gia re", value: 1},
]

const interestArticles = [
    {label: "Mau hop dong cho thue phong tro", value: 1},
    {label: "Can than lua dao khi thue phong tro", value: 1},
    {label: "Kinh nghiem thue phong tro cho sinh vien", value: 1},
]


function HomePage() {

    const renderHouseInfo = () => (
        <div className="flex mt-2 border-0 border-t border-slate-200 p-2">
            <img className="w-72 h-60 rounded"
                 src="https://i-connect.com.vn/data/news/7046/anh-2-phong-tro-rong.jpg" alt=""/>
            <div className="ml-2">
                <div className="text-sm font-bold uppercase text-[#E13427]">
                    <StarFilled style={{color: 'yellow', width: 16, height: 16}}/>
                    <StarFilled style={{color: 'yellow', width: 16, height: 16}}/>
                    <StarFilled style={{color: 'yellow', width: 16, height: 16}}/>
                    Phong tret cao thoang mat gia phai chang
                </div>
                <div className="flex mt-2 justify-between">
                    <div>
                        <div className="flex"><b className="text-[#16c784]">3.5 trieu/Thang</b><p
                            className="pl-2">35m2</p></div>
                        <div>Quan Binh Thanh, TpHcm</div>
                    </div>
                    <div>Hom nay</div>
                </div>
                <div className="text-xs mt-2 text-[#8a8d91]">Phòng trệt gác cao hẻm 190 Nguyễn Gia Trí, thoáng mát,
                    chỗ đậu xe rộng
                    Chính chủ cho thuê phòng rộng thoáng mát, Hẻm ô tôCó 2 lối vào nhà trọ- Lối 1…
                </div>
                <div className="flex mt-4 justify-between">
                    <div>
                        <Avatar icon={<UserOutlined/>} size={40}/>
                        Thi Hong
                    </div>
                    <Button className="bg-[#0071c2]" type="primary">Goi 0112211221122</Button>
                </div>
            </div>
        </div>
    )

    const renderFilterFeed = (title, leftData, rightData) => (
        <div className="p-4 mb-4 border border-slate-200 rounded-xl">
            <div className="font-bold text-xl">{title}</div>
            <div className="flex p-3 justify-between">
                <div>
                    {leftData.map((price) => (
                        <div className="pt-2 flex">
                            <RightOutlined style={{height: 10, width: 10, marginTop: 8}}/><p
                            className="pl-2 hover:text-amber-500 hover:cursor-pointer">{price.label}</p>
                        </div>
                    ))}

                </div>
                <div>
                    {rightData.map((price) => (
                        <div className="pt-2 flex">
                            <RightOutlined style={{height: 10, width: 10, marginTop: 8}}/><p
                            className="pl-2 hover:text-amber-500 hover:cursor-pointer">{price.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

    const renderNewFeed = (title, leftData) => (
        <div className="p-4 mb-4 border border-slate-200 rounded-xl">
            <div className="font-bold text-xl">{title}</div>
            <div className="p-3">
                {leftData.map((price) => (
                    <div className="pt-2 flex">
                        <RightOutlined style={{height: 10, width: 10, marginTop: 8}}/><p
                        className="pl-2 hover:text-amber-500 hover:cursor-pointer">{price.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <div className="w-[1100px]">
            {/*  Header  */}
            <div className="h-20 flex justify-between">
                <div className="pt-2 hover:cursor-pointer">
                    <img alt="" className="h-20 w-60"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"/>
                </div>
                <div className="flex pt-6">
                    <div><Button size="large" icon={<UserAddOutlined/>} type="text">Login</Button></div>
                    <div><Button size="large" icon={<LoginOutlined/>} type="text">Registor</Button></div>
                    <Button icon={<PlusOutlined/>} size="large" type="primary" danger>Dang tin mien phi</Button>
                </div>
            </div>
            {/*  Menu  */}
            <AppMenu/>

            {/*  Tim kiem  */}
            <div className="p-3 rounded-xl bg-[#febb02] mt-4 gap-4 w-full flex">
                <Select placeholder="Chon loai" options={[
                    {label: "Phong tro", value: "PT"},
                    {label: "Nha tro", value: "NT"},
                    {label: "Can Ho", value: "CH"},
                ]} className="w-1/5"/>
                <Select placeholder="Vi tri" className="w-1/5"/>
                <Select placeholder="Khoang tien" className="w-1/5"/>
                <Select placeholder="Dien tich" className="w-1/5"/>
                <Button className="w-1/5 bg-[#0071c2]" icon={<SearchOutlined/>} size="middle" type="primary">Tim
                    kiem</Button>
            </div>

            {/*  Thong tin  */}

            <div className="w-full flex gap-4 pt-4">
                <div className="w-2/3 border p-4 border-slate-200 rounded-xl">

                    {/* Sap xem - Tong*/}
                    <div>
                        <div className="text-base font-bold">Tổng 122.423 kết quả</div>
                        <div className="flex">
                        <div>Sap xep: </div>
                            <Button type="secondary" className="bg-[#E2E8F0] ml-2" size="small">Mac dinh</Button>
                            <Button type="secondary" className="bg-[#E2E8F0] mx-2" size="small">Moi nhat</Button>
                            <Button type="secondary" className="bg-[#E2E8F0]" size="small">Co video</Button>
                        </div>
                    </div>

                    {/* Thong tin phong tro */}
                    {renderHouseInfo()}
                    {renderHouseInfo()}
                    {renderHouseInfo()}
                    {renderHouseInfo()}
                    {renderHouseInfo()}
                    {renderHouseInfo()}

                </div>

                <div className="w-1/3">

                    {renderFilterFeed('Xem theo gia', leftMoneyFilter, rightMoneyFilter)}

                    {renderFilterFeed('Xem theo dien thich', leftAreaFilter, rightAreaFilter)}

                    {renderNewFeed('Bai viet moi', newArticles)}
                    {renderNewFeed('Co the ban se quan tam', interestArticles)}

                </div>
            </div>
        </div>

    );
}

export default HomePage;
