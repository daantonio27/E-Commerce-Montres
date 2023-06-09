import React, { useState } from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ id, image, title, price }) => {
  const dispatch = useDispatch();

  const AddToCart = (id, image, title, price, amount = 1) => {
    dispatch(addToCart({ id, image, title, price, amount }));
  };

  return (
    <Wrapper>
      <div className="img">
        <img src={image} alt="" />
        <button
          className="addToCart"
          onClick={() => {
            AddToCart(id, image, title, price);
          }}
        >
          Ajouter au panier
        </button>
      </div>
      <Link to={`/product-details/${id}`}>{title}</Link>
      <h4>{price} CFA</h4>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: calc(100% / 3 - 60px / 3);
  overflow: hidden;
  text-align: center;
  .img {
    border-bottom: 3px solid var(--main-color);
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    .addToCart {
      padding: 10px;
      background-color: var(--main-color);
      color: #fff;
      position: absolute;
      bottom: -50px;
      left: 0;
      width: 100%;
      /* z-index: 2; */
      transition: var(--main-trans);
    }
    .addToWhish {
      font-size: 24px;
      position: absolute;
      top: 10px;
      right: 10px;
      transition: var(--main-trans);
      opacity: 0;
      color: var(--main-color);
    }
  }
  a {
    display: block;
    font-size: 22px;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    &:hover {
      color: var(--main-color);
    }
  }
  h4 {
    margin: 0;
  }

  &:hover {
    .img {
      .addToCart {
        bottom: 0px;
      }
      .addToWhish {
        opacity: 1;
      }
    }
  }
  @media (max-width: 992px) {
    width: calc(100% / 2 - 15px);
  }

  @media (max-width: 576px) {
    width: calc(100%);
  }
`;

export default Product;
