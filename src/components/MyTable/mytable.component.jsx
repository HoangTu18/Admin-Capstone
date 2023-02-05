import React from "react";
import "./mytable.style.scss";
function MyTable({ title, header, body }) {
  return (
    <div className="my-table">
      <div className="my-table__head">
        <h4>Danh sách {title}</h4>

        <div className="control">
          <button>Thêm {title}</button>
          <div className="input">
            <input type="text" placeholder="Tìm kiếm..." />
            <i class="fa fa-search"></i>
          </div>
          <i class="fa fa-filter"></i>
        </div>
      </div>
      <table>
        <thead>
          {header.map((item) => {
            return <th>{item.title}</th>;
          })}
        </thead>

        <tbody>
          {body.map((item) => {
            return (
              <tr>
                {header.map((item2) => {
                  var variable = item2.variable;
                  return <td>{item[variable]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
