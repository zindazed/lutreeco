import React from "react";
import { Icon } from '@iconify/react';

function NewsCard(props) {
    return (
        <div className="col-12 col-md-6 mt-3">
        <div className="" style={{borderBottom: "10px solid rgb(254, 172, 21)"}}>
            <div
                style={{ backgroundImage: `url(${props.image})`, 
                height: "400px",
                border: "10px solid white",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
            className="d-flex bg-white justify-content-start align-items-center"
            ></div>
            <div className="mt-2" style={{backgroundColor: "#FAFAFA"}}>
                <div className="text-white p-3">
                <h5 className="text-dark" style={{fontWeight: "bold"}}>{props.title}</h5>
                <p className="text-dark">
                    {props.content}
                </p>
                <div className="d-block d-md-flex justify-content-between align-items-center">
                    <a href={props.link} target="_blank" className="readMore btn text-white" style={{fontSize: "17px", fontWeight: "bold", backgroundColor: "rgb(117, 188, 11)", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
                        Read More <span className="ms-2"><Icon icon="zondicons:arrow-right" /></span>
                    </a>
                    <h6 className="mt-3 mt-md-0 " style={{fontWeight: "bold", fontStyle: "italic", color: "grey", fontSize: "14px"}}>Published no {props.date}</h6>
                </div>
            </div>
            
            </div>
        </div>
      </div>
    );
}
  
export default NewsCard;