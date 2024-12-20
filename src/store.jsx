import React, { useState } from "react";


const regions = {
    Tohoku: [
        {
            storeName: "青森シティショップ",
            address: "青森県青森市中央1-2-3",
            phoneNumber: "017-123-4567",
        },
        {
            storeName: "仙台駅前ストア",
            address: "宮城県仙台市青葉区駅前4-5-6",
            phoneNumber: "022-987-6543",
        },
        {
            storeName: "福島北店",
            address: "福島県福島市本町7-8-9",
            phoneNumber: "024-345-6789",
        },
    ],
    Kanto: [
        {
            storeName: "東京銀座ショップ",
            address: "東京都中央区銀座1-1-1",
            phoneNumber: "03-1234-5678",
        },
        {
            storeName: "横浜みなとみらい店",
            address: "神奈川県横浜市西区みなとみらい2-2-2",
            phoneNumber: "045-987-6543",
        },
        {
            storeName: "大宮メインストア",
            address: "埼玉県さいたま市大宮区桜木町3-4-5",
            phoneNumber: "048-765-4321",
        },
    ],
    Kansai: [
        {
            storeName: "大阪梅田ショップ",
            address: "大阪府大阪市北区梅田1-1-1",
            phoneNumber: "06-1234-5678",
        },
        {
            storeName: "京都四条店",
            address: "京都府京都市下京区四条通1-2-3",
            phoneNumber: "075-987-6543",
        },
        {
            storeName: "神戸三宮ストア",
            address: "兵庫県神戸市中央区三宮町2-3-4",
            phoneNumber: "078-765-4321",
        },
    ],
};


const Store = ({ storeName, address, phoneNumber }) => (
    <li>
        <strong>{storeName}</strong>
        <p>{address}</p>
        <p>{phoneNumber}</p>
    </li>
);


const App = () => {
    const [Region, SelectedRegion] = useState("Kanto");

   
    const stores = regions[Region];

    return (
        <div>
            <h1>店舗情報</h1>

            
            <label htmlFor="pick">地域を選択する：</label>
            <select
                id="pick"
                value={Region}
                onChange={(e) => SelectedRegion(e.target.value)}
            >
                <option value="Tohoku">東北</option>
                <option value="Kanto">関東</option>
                <option value="Kansai">関西</option>
            </select>

      
            <ul>
                {stores.map((store) => (
                    <Store
                        key={store.storeName}
                        storeName={store.storeName}
                        address={store.address}
                        phoneNumber={store.phoneNumber}
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;