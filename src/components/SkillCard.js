import React from "react";

const SkillCard = ({ skillName, level }) => {
    return (
        <div className="card p-3 shadow skill-card"> 
        <h4>{skillName}</h4>
        <p>{level}</p>
        </div>
    );
};

export default SkillCard;