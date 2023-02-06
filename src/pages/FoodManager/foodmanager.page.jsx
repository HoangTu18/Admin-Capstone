import React, { useState } from "react";
import AdminPage from "../../components/AdminPage/adminpage.component";
import DishEdit from "../../components/DishEdit/dishedit.component";
import MyTable from "../../components/MyTable/mytable.component";
import "./foodmanager.style.scss";
function FoodManager() {
  const header = [
    {
      variable: "foodId",
      title: "Mã món ăn",
    },
    {
      variable: "foodName",
      title: "Tên món ăn",
    },
    {
      variable: "price",
      title: "Giá (VND)",
    },
    {
      variable: "type",
      title: "Loại",
    },
    {
      variable: "status",
      title: "Trạng thái",
    },
  ];

  const body = [
    {
      foodId: "ID123",
      foodName: "Test user",
      price: "100.000",
      type: "Loại 1",
      status: "ok",
    },
    {
      foodId: "ID123",
      foodName: "Test user",
      price: "100.000",
      type: "Loại 1",
      status: "ok",
    },
    {
      foodId: "ID123",
      foodName: "Test user",
      price: "100.000",
      type: "Loại 1",
      status: "ok",
    },
    {
      foodId: "ID123",
      foodName: "Test user",
      price: "100.000",
      type: "Loại 1",
      status: "ok",
    },
    {
      foodId: "ID123",
      foodName: "Test user",
      price: "100.000",
      type: "Loại 1",
      status: "ok",
    },
  ];

  const header2 = [
    {
      variable: "comboId",
      title: "Mã combo",
    },
    {
      variable: "comboName",
      title: "Tên combo",
    },
    {
      variable: "price",
      title: "Giá (VND)",
    },
    {
      variable: "status",
      title: "Trạng thái",
    },
  ];

  const body2 = [
    { comboId: "ID123", comboName: "Combo 1", price: "100.000", status: "ok" },
    { comboId: "ID123", comboName: "Combo 1", price: "100.000", status: "ok" },
    { comboId: "ID123", comboName: "Combo 1", price: "100.000", status: "ok" },
    { comboId: "ID123", comboName: "Combo 1", price: "100.000", status: "ok" },
  ];

  const [tab, setTab] = useState("tab1");
  return (
    <div>
      <AdminPage>
        <div className="tab-wrapper">
          <div className="tab-wrapper__header">
            <span
              className={tab == "tab1" ? "active" : ""}
              onClick={() => {
                setTab("tab1");
              }}
            >
              Món lẻ
            </span>
            <span
              className={tab == "tab2" ? "active" : ""}
              onClick={() => {
                setTab("tab2");
              }}
            >
              Combo
            </span>
          </div>
          <div className="tab__body">
            <div className={tab == "tab1" ? "tab active" : "tab"}>
              <MyTable title={"món lẻ"} header={header} body={body} />
              <DishEdit/>
            </div>
            <div className={tab == "tab2" ? "tab active" : "tab"}>
              <MyTable title={"combo"} header={header2} body={body2} />
            </div>
          </div>
        </div>
      </AdminPage>
    </div>
  );
}

export default FoodManager;
