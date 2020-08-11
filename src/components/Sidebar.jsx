import React from 'react'
import ProfileCard from "./ProfileCard"
import Menu from "./Menu"

function Sidebar() {
    return (
        <div className="sidebar">
            <ProfileCard />
            <Menu />
        </div>
    )
}

export default Sidebar
