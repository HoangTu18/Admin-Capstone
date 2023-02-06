import React from "react";
import AdminPage from "../../components/AdminPage/adminpage.component";
import MyTable from "../../components/MyTable/mytable.component";
import CustomerEdit from "../../components/CustomerEdit/customeredit.component";

function CustomerManager() {
  const header = [
    {
      variable: "customerId",
      title: "Mã khách hàng",
    },
    {
      variable: "customerName",
      title: "Tên khách hàng",
    },
    {
      variable: "phone",
      title: "Số điện thoại",
    },
    {
      variable: "address",
      title: "Địa chỉ",
    },
    {
      variable: "email",
      title: "Email",
    },
  ];

  const body = [
    {
      customerId: "ID123",
      customerName: "Test user",
      phone: "0981287382",
      address: "Địa chỉ",
      email: "test@gmail.com",
    },
    {
      customerId: "ID123",
      customerName: "Test user",
      phone: "0981287382",
      address: "Địa chỉ",
      email: "test@gmail.com",
    },
    {
      customerId: "ID123",
      customerName: "Test user",
      phone: "0981287382",
      address: "Địa chỉ",
      email: "test@gmail.com",
    },
    {
      customerId: "ID123",
      customerName: "Test user",
      phone: "0981287382",
      address: "Địa chỉ",
      email: "test@gmail.com",
    },
    {
      customerId: "ID123",
      customerName: "Test user",
      phone: "0981287382",
      address: "Địa chỉ",
      email: "test@gmail.com",
    },
    {
      customerId: "ID123",
      customerName: "Test user",
      phone: "0981287382",
      address: "Địa chỉ",
      email: "test@gmail.com",
    },
  ];
  return (
    <div>
      <AdminPage>
        <MyTable title={"khách hàng"} header={header} body={body} />
        <CustomerEdit/>
      </AdminPage>
    </div>
  );
}

export default CustomerManager;
