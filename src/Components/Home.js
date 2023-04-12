import React, { useEffect, useState } from "react";
import jsondata from "../Data.json";
import Image from "./Image";
// import random from "random";
export default function Home() {
  const [userdata, setUserdata] = useState(jsondata.data);
  let temp = [];
  useEffect(() => {
    let doc = jsondata.data.sort(function (a, b) {
      return a.score - b.score;
    });
    setUserdata(doc.reverse());

    setInterval(() => {
      updatescore();
    }, 4000);
    // console.log("kjsnchzucsdusdiuhsduhcfhisd--->", userdata);
  });

  let updatescore = () => {
    // setInterval(() => {
    jsondata.data.length &&
      jsondata.data.map((item) => {
        temp.push((item.score = Math.floor(Math.random() * 99999)));
      });
    // }, 6000);
    setUserdata(temp);
    let doc = temp.sort(function (a, b) {
      return a.score - b.score;
    });
    setUserdata(doc.reverse());
    console.log("dcc---->", userdata);
  };

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-md-6 mredious ">
          <table className="table  mt-5">
            <tbody>
              {userdata &&
                userdata.map((item, index) => {
                  return (
                    <tr
                      id="myGrid"
                      className={`p-0 m-0 ag-theme-alpine-dark ${
                        index % 2 === 0 ? "fixbg" : "whitebg"
                      } ${index === 0 ? "firstRow" : ""} hoverrow `}
                      key={index}
                    >
                      <td className="px-4 py-2 m-0">
                        <div className="d-flex justify-content-between align-items-center tablerow">
                          <div className="d-flex align-items-center">
                            <div>
                              <Image src={item?.image} rank={index + 1} />
                            </div>
                            <p
                              className={`   ms-3 py-0 my-0 ${
                                index === 0 ? "fixname" : "name"
                              }`}
                            >
                              {item?.displayName}{" "}
                            </p>
                          </div>
                          <div
                            className={`${
                              index === 0 ? "fixpointno" : "pointno"
                            } `}
                          >
                            {item?.score}
                            <span
                              className={`ms-2  ${
                                index === 0 ? "fixpoint" : "point"
                              }`}
                            >
                              {" "}
                              Points
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
