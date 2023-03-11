import React from "react";
import editImage from "../../assets/edit.svg";
import deleteImage from "../../assets/delete.svg";

const TransactionList = () => {
  return (
    <>
      <p class="second_heading">Your Transactions:</p>
      <div class="conatiner_of_list_of_transactions">
        <ul>
          <li class="transaction income">
            <p>Earned this month</p>
            <div class="right">
              <p>৳ 100</p>
              <button class="link">
                <img class="icon" src={editImage} />
              </button>
              <button class="link">
                <img class="icon" src={deleteImage} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
