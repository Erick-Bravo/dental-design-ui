import React, { useEffect, useState } from "react";
import "./index.css";

const LeadCard = ({lead}) => {
    return (
        <section>

        </section>
    );
};



const LeadershipTeam = () => {

    const [ leaders, setLeaders ] = useState(null)

    useEffect(async () => {
        const response = await fetch("https://beamtech.github.io/marketing-kata-html/leadership-team.json");
        const data = await response.json();
        // await console.log(data)
        // await console.log(response)
        await setLeaders(data);
    }, [])

    useEffect(() => {

    }, [leaders])

    console.log(`AHHHHHHHHHHH ${leaders}`)

    return (
        <section className="leadership-container">
            <h2>Our Leadership Team</h2>

            <section className="light-blue-line-container">
                <div className="light-blue-line"></div>
            </section>

        </section>
    );
};

export default LeadershipTeam;