import React from "react";
import AdminPage from "../../components/AdminPage/adminpage.component";
import MyTable from "../../components/MyTable/mytable.component";
import UserEdit from "../../components/UserEdit/useredit.component";

function AccountManager() {
  const header = [
    {
      variable: "employeeId",
      title: "Mã nhân viên",
    },
    {
      variable: "employeeName",
      title: "Tên nhân viên",
    },
    {
      variable: "employeePosition",
      title: "Chức danh",
    },
    {
      variable: "status",
      title: "Trạng thái",
    },
    {
      variable: "phone",
      title: "Số điện thoại",
    },
  ];

  const body = [
    {
      employeeId: "ID123",
      employeeName: "Test user",
      employeePosition: "admin",
      status: "active",
      phone: "0981287382",
    },
    {
      employeeId: "ID123",
      employeeName: "Test user",
      employeePosition: "admin",
      status: "active",
      phone: "0981287382",
    },
    {
      employeeId: "ID123",
      employeeName: "Test user",
      employeePosition: "admin",
      status: "active",
      phone: "0981287382",
    },
    {
      employeeId: "ID123",
      employeeName: "Test user",
      employeePosition: "admin",
      status: "active",
      phone: "0981287382",
    },
  ];
  const dataedit = {
    userid : "112",
    username: "Tu",
  }
  return (
    <div>
      <AdminPage>
        <MyTable title={"nhân viên"} header={header} body={body} />
        <UserEdit data={dataedit}/>
      </AdminPage>
    </div>
  );
}

export default AccountManager;
