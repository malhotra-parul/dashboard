import React from 'react'
import DailyVisitors from "./DailyVisitors";
import RealtimeUsers from "./RealtimeUsers";
import TotalVisits from "./TotalVists";
import BounceRate from "./BounceRate";
import VisitDuration from "./VisitDuration";
import Footer from "./Footer";

function Content() {
    return (
        <div className="content">
            <DailyVisitors />
            <RealtimeUsers />
            <TotalVisits />
            <BounceRate />
            <VisitDuration />
            <Footer />
        </div>
    )
}

export default Content
