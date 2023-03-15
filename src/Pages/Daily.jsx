import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import menu from "../assets/images/icon-ellipsis.svg";
import Load from "../components/Load";

const Daily = () => {
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
      {" "}
    
        <div className="row box-right">
          {newData.map((element, index) => ( !loading ? 
            <div key={index} className={element.card}>
              <div className="row card-body ">
                <div className="col-6 start">
                  <h5>{element.title}</h5>
                  <h2>{element.timeframes.daily.current}hrs</h2>
                  <h4>
                    {element.timeframes.daily.date} -{" "}
                    {element.timeframes.daily.previous}hrs
                  </h4>
                </div>
                <div className="col-6 end">
                  <img src={menu} />
                  <h5>
                    {element.timeframes.daily.date} -{" "}
                    {element.timeframes.daily.previous}hrs
                  </h5>
                </div>
              </div>
            </div>
            : 
            <Load/>
          ))}
        </div>
       
    </>
  );
};

export default Daily;
