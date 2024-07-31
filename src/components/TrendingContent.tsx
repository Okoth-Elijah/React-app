import culture from "../assets/images/culture.jpeg";
import climate from "../assets/images/climate.jpeg";
import Bike from "../assets/images/Bike.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";

type myData = {
  class_id: number;
  class_name: string;
  syllabus: string;
  capacity: number;
};

const TrendingContent = () => {
  const [data, setData] = useState<any[]>([]);

  const quote = () => {
    axios
      .get("http://192.168.100.130:3100/classes")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.message, res.data.number_of_classes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    quote();
  }, []);

  return (
    <>
      {data.map((x: myData, index: number) => (
        <div key={index} className=" d-flex gap-3">
          <span>{x.class_name}</span>
          <span> {x.syllabus}</span>
          <span> {x.capacity}</span>
        </div>
      ))}

      <div className=" conatiner-fluid">
        <h4 className="heading">Trending Articles</h4>
        <div className=" d-flex  justify-content-between ">
          <div className="d-flex">
            <img
              className="mt-3 image-fluid me-2"
              src={culture}
              alt="img"
              style={{ width: "70px", height: "70px", borderRadius: "45px" }}
            />
            <div className=" my-2 " style={{ width: "14em" }}>
              <h5 className="text-start">culture</h5>
              <p
                style={{
                  width: "17em",
                  lineHeight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eaque autem .
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 ">
            <img
              className="mt-3 image-fluid me-2"
              src={Bike}
              alt="img"
              style={{ width: "70px", height: "70px", borderRadius: "45px" }}
            />
            <div className=" my-2 " style={{ width: "14em" }}>
              <h5 className="text-start ">Happyness</h5>
              <p
                style={{
                  width: "17em",
                  lineHeight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eaque autem .
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 ">
            <img
              className="mt-3 image-fluid me-2"
              src={climate}
              alt="img"
              style={{ width: "70px", height: "70px", borderRadius: "45px" }}
            />
            <div className=" my-2 " style={{ width: "14em" }}>
              <h5 className="text-start ">WorkForce Ecosystems</h5>
              <p
                style={{
                  width: "17em",
                  lineHeight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eaque autem .
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TrendingContent;
