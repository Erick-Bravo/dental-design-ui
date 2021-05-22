import React, { useEffect, useState } from "react";
import LeadCard from "./LeadCard"
import "./index.css";


const LeadershipTeam = () => {

    const [ leaders, setLeaders ] = useState(null)

    useEffect(async () => {
        const response = await fetch("https://beamtech.github.io/marketing-kata-html/leadership-team.json");
        const data = await response.json();
        await setLeaders(data);
    }, [])

    useEffect(() => {

    }, [leaders])

    return (
        <section className="leadership-container">
            <h2>Our Leadership Team</h2>

            <section className="light-blue-line-container">
                <div className="light-blue-line"></div>
            </section>

            <section className="leadcard-container">
                {leaders && leaders.map((lead) => {
                    return <LeadCard lead={lead} key={lead.url} />
                })}
            </section>
        </section>
    );
};

export default LeadershipTeam;