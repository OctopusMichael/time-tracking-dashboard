import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import menu from "../assets/images/icon-ellipsis.svg";
import Load from "../components/Load";

const Weekly = () => {
  const [newData, setnewData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log(newData);

  return (
    <>
      <div className="row box-right">
        {newData.map((element, index) => ( !loading  ? 
          <div key={index} className={element.card}>
            <div className="row card-body ">
              <div className="col-6 start">
                <h5>{element.title}</h5>
                <h2>{element.timeframes.weekly.current}hrs</h2>
                <h4>
                  {element.timeframes.weekly.date} - {element.timeframes.weekly.previous}hrs
                </h4>
              </div>
              <div className="col-6 end"> 
                <img src={menu} />
                <h5>
                  {element.timeframes.weekly.date} - {element.timeframes.weekly.previous}hrs
                </h5>
              </div>
            </div>
          </div>
          : <Load/>
        ))}
      </div>
    </>
  );
};

export default Weekly;
