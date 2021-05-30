import React, { Component } from "react";
import { useLocation } from "react-router-dom";

const GetUser = () => {

    const images = [
      "https://randomuser.me/api/portraits/women/71.jpg",
      "https://randomuser.me/api/portraits/women/11.jpg",
      "https://randomuser.me/api/portraits/women/15.jpg",
      "https://randomuser.me/api/portraits/women/19.jpg",
      "https://randomuser.me/api/portraits/women/18.jpg",
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/men/15.jpg",
      "https://randomuser.me/api/portraits/men/33.jpg",
      "https://randomuser.me/api/portraits/men/18.jpg",
      "https://randomuser.me/api/portraits/men/20.jpg",
    ];

    const location = useLocation()
    const user = location.state?.user
    console.log(user)

    return (
        <>
        <div className="col-sm-2">&nbsp;</div>

        <div className="col-sm-8 big_card" id="detail_card"> 
            <div className="card">
                <div className="text-center services-item">
                <div className="col-wrapper">
                    <div className="icon-border"> 
                    {/* <i  className={icons[index]}></i>  */}
                    <img src={images[user.id-1]} alt="person" className="big_img"/>
                    </div>
                    <h5>{user.name}</h5>
                    <p className="first">
                        <span className="details">Company: </span>
                        <b>{user.company.name}</b>
                        <br/>
                        <span className="grey">({user.company.catchPhrase})</span>
                        
                        <br/>
                        <span className="details username">Username:&nbsp;
                        <b>{user.username}</b>
                        </span>

                        <br/>
                        <span className="details">email: </span>
                        {user.email}

                        <br/>
                        <span className="details">phone: </span>
                        {user.phone}

                        <br/>
                        <span className="details">website: </span>
                        <b>{user.website}</b>
                    </p>
                    <p className="company_name second">
                        <span className="details">Address: </span>
                        <br/>
                        {user.address.street} 
                        <br/>
                        {user.address.suite} 
                        <br/>
                        {user.address.city}
                        <br/>
                        Zip code: {user.address.zipcode} 
                        <br/>
                        Geo: {user.address.geo.lat}(lat), {user.address.geo.lng}(lng)
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className="col-sm-2">&nbsp;</div>
        </>
    );
}

export default GetUser;
