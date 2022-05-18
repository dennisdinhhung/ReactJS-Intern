import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../../store/action/actions";
import { GET_PAYMENT } from "../../../store/action/constants";
import SidebarAdmin from "../Sidebar/SidebarAdmin";

const ManagerPayment = () => {
  const { checkPayment } = useSelector((state) => state.data);
  const [pickedUser, setPickedUser] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getPayment())
  }, [dispatch])
  console.log(checkPayment,'check')
  const handleCheckbox = (id) => {
    const isChecked = pickedUser.includes(id);
    const checkboxListUpdate = isChecked
      ? pickedUser.filter((item) => item !== id)
      : [...pickedUser, id];
    setPickedUser(checkboxListUpdate);
  };
  return (
    <div className="container-manager">
      <SidebarAdmin />
      <form>
        <div className="list">
          <table className="customer">
            <thead>
              <tr>
                <th></th>
                <th>Họ tên KH</th>
                <th>Số điện thoại KH</th>
                <th>Địa chỉ</th>
                <th>Đơn hàng</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {checkPayment.map((payment, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      name="checkbox"
                      onChange={() => handleCheckbox(payment.id)}
                      checked={pickedUser.includes(payment.id)}
                    />
                  </td>
                  <td>{payment.map(pay=>(<div>{pay.userName}</div>))}</td>
                  <td>{payment.map(pay=>(<div>{pay.phoneNumber}</div>))}</td>
                  <td>{payment.map(pay=>(<div>{pay.address}</div>))}</td>
                  <td>{payment.map(pay=>(<div>{pay.title}</div>))}</td>
                  <td>{payment.map(pay=>(<div>{pay.amount}</div>))}</td>
                  <td>{payment.map(pay=>(<div>{pay.totalPrice} </div>))} đồng </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button">
          <button className="delete">Xử lý đơn hàng</button>
        </div>
      </form>
    </div>
  );
};

export default ManagerPayment;
