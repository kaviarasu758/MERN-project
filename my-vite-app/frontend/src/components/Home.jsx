import React from "react";
import Ashpic from '../assets/image.jpg';
import '../components/css/Home.css';
import { useState } from "react";

var Kavi = (props) => {
    var styling = {
        fontSize: "20px",
        color: "black",
        textAlign: "center",
        paddingTop: "50px"
    };
    return (
        <div>
            <p className="welcome">welcome</p>
            <h1 style={{ color: "yellow", textAlign: "center" }}>
                {localStorage.getItem("user_name")}: One Piece
            </h1>
            <div className="row">
                <img src={Ashpic} alt="logo" />
                <div className="col2">
                    <p>
                        One Piece is a legendary manga and anime series by Eiichiro Oda, first serialized in 1997. It follows Monkey D. Luffy, a spirited pirate with a dream to find the One Piece, a mythical treasure, and become the Pirate King. After eating the Gomu Gomu no Mi, a Devil Fruit, Luffy gains the ability to stretch his body like rubber. Luffy forms the Straw Hat Pirates, a crew of unique individuals with their own dreams. Key members include Roronoa Zoro, a swordsman; Nami, a navigator; Sanji, a chef; Usopp, a sharpshooter; Chopper, a reindeer doctor; Robin, an archaeologist; Franky, a shipwright; Brook, a skeletal musician; and Jinbe, a fish-man helmsman.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Kavi;