import React from "react";
import ShopNowBtn from "./ShopNowBtn.jsx";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const { totalItems, totalAmount, tax, subtotal } = useSelector(
    (store) => store.cart
  );
  const { user } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div className="container">
        <div className="notes">
          {totalAmount > 50 ? (
            <>
              <p>
                Votre commande a coûté plus de <span>50 000 CFA</span>!
              </p>
              <h4>
                <span>Félicitations</span> Vous êtes éligible à la livraison
                gratuite <FaShippingFast />
              </h4>
            </>
          ) : (
            <>
              <p>
                Si le montant total est égal ou supérieur à{" "}
                <span>50 000 CFA</span>!
              </p>
              <h4>
                Vous bénéficierez de la <span>livraison gratuite</span>
                <FaShippingFast />
              </h4>
            </>
          )}
        </div>
        <div className="checkout">
          <div>
            <h4>Total des articles :</h4>
            <p>{totalItems} articles</p>
          </div>
          <div>
            <h4>Subtotal:</h4>
            <p>{subtotal} CFA</p>
          </div>
          <div>
            <h4>Taxes de vente :</h4>
            <p>{tax} CFA</p>
          </div>
          <div>
            <h4>Total général :</h4>
            <p className="total">{totalAmount} CFA</p>
          </div>
          <br />
          <ShopNowBtn
            text={user ? "Checkout" : "Login"}
            padding={"15px 50px"}
          />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 25px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    .notes {
      span {
        border-bottom: 2px solid var(--main-color);
      }

      h4 {
        line-height: 1.5;
        svg {
          margin-left: 5px;
          color: var(--main-color);
        }
      }
    }
    .checkout {
      width: 375px;
      margin-left: auto;

      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
          border-bottom: 1px solid gray;
        }
        .total {
          font-weight: bolder;
          font-size: 18px;
          letter-spacing: 1.5px;
        }
      }
    }
  }
`;
export default CartTotals;
