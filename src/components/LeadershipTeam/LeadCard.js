import React from "react";

//Usually
const LeadCard = ({lead}) => {
    
    return (
        <div className="lead-card">
            <img src={lead.image} alt="lead" />
            <p className="name">{lead.name}</p>
            <p className="title">{lead.title}</p>
        </div>
    );
};

export default LeadCard