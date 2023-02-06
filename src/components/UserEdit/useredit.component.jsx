import React from "react";
import "./useredit.style.scss";
import logo from '../../img/test.jpg';
function UserEdit({ data }) {
  return (
    <div className="user-edit">
      <div className="user-edit_image">
      <img src={logo} alt="Logo" />

      </div>
      <div className="user-edit_infor">
        <form className="frm-user-edit">
          <label className="user-edit_label">Mã nhân viên: 
            <input type="text" disabled value="#015236"/>
          </label>
          <label className="user-edit_label">Tên đăng nhập: <span className="proirity">*</span>
            <input type="text"/>
          </label>
          <label className="user-edit_label">Mật khẩu: 
            <input type="text" disabled value="********"/>
          </label>
          <label className="user-edit_label">Họ và tên: <span className="proirity">*</span>
            <input type="text"/>
          </label>
          <label className="user-edit_label">Chức danh: <span className="proirity">*</span>
            <select>
              <option>Nhân viên</option>
              <option>Giám đốc</option>           
            </select>
          </label>
          <label className="user-edit_label">Email: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="user-edit_label">Số điện thoại: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="user-edit_label">Địa chỉ: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="user-edit_label">Trạng thái: <span className="proirity">*</span>
          <label className="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>          
          </label>     
          <div className="action">
              <button type="submit" className="btn-success">Lưu</button>
              <button type="submit" className="btn-danger">Huỷ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;
