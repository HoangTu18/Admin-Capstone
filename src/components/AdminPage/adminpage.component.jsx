import React from "react";
import "./adminpage.style.scss";
function AdminPage({ children }) {
  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h4>Hello, Gia Bảo</h4>

        <div className="">
          <i class="fa fa-search"></i>
          <i class="fa fa-bell"></i>
          <div className="avatar">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              alt=""
            />
            <span>Gia Bảo</span>
            <i class="fa fa-angle-down"></i>
          </div>
        </div>
      </div>

      <div className="admin-page__body">{children}</div>
    </div>
  );
}

export default AdminPage;
