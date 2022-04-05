import {
  DeleteOutlined,
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Card from "../Card/Card";
import Collection from "../Collection/Collection";
import Pagination from "../Pagination/Pagination";
import "./PoloMen.css";

const PoloMen = () => {
  const { products, getProducts } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({
      type: "polo",
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="collection-blocks">
      <BreadCrumb />
      <h1 className="polo-title collection-title">Men's Polo Shirts</h1>
      <div className="polo collection-block">
        <Collection />
        {/* {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-img">
              <img
                src={image ? item.image1 : item.image2}
                onMouseEnter={() => setImage(true)}
                onMouseLeave={() => setImage(false)}
                alt=""
              />
            </div>
           
            </div>
          </div>
        ))} */}
        <div className="card-block">
          {products.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default PoloMen;