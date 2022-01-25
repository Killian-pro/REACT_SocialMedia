import React, { useEffect, useState } from 'react'
import Logo from '../IMG/InstagramLogoBlanc.png'
import { BiSlideshow } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { BiStats } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";





function Sidebar({ pageSelected, setPageSelected, setShowMessage }) {

    return (
        <div style={{ backgroundColor: '#282A34', width: '19vw', fontSize: "1vw" }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: 15 }}>
                <div style={{ paddingRight: 15, marginLeft: 15 }}><BsInstagram style={{ fontSize: 25 }} /></div>
                <img style={{ width: "7vw" }} src={Logo} alt="Logo" />
            </div>
            <div style={{ marginTop: '5vh', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: "6vw", height: "6vw", borderRadius: 50, backgroundImage: `linear-gradient(to top right, #E2336B, #FCAC46)`, alignItems: 'center', justifyContent: 'center', display: 'flex', padding: 2 }}>
                    <div style={{ width: "6vw", height: "6vw", borderRadius: 50, backgroundColor: '#282A34', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <img style={{ width: "5.6vw", height: "5.6vw", borderRadius: 50 }} src={"https://images.unsplash.com/photo-1610068071990-49c06875e0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="picture" />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2vh' }}>
                Michaelle Jong
            </div>
            <div style={{ textAlign: 'center', marginTop: '1vh', fontSize: "0.8vw", color: '#606371', fontWeight: 'bold' }}>
                @mi-jong
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: "3vw", paddingRight: '3vw' }}>
                <div style={{ textAlign: 'center', marginTop: '2vh' }}>
                    <div>
                        46
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1vh', fontSize: "0.8vw", color: '#606371', fontWeight: 'bold' }}>
                        Posts
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid #565965', height: '5vh', margin: 15 }}></div>

                <div style={{ textAlign: 'center', marginTop: '2vh' }}>
                    <div>
                        2.8k
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1vh', fontSize: "0.8vw", color: '#606371', fontWeight: 'bold' }}>
                        Followers
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid #565965', height: '5vh', margin: 15 }}></div>
                <div style={{ textAlign: 'center', marginTop: '2vh' }}>
                    <div>
                        526
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1vh', fontSize: "0.8vw", color: '#606371', fontWeight: 'bold' }}>
                        Following
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "3vh" }}>
                <div onClick={() => { setPageSelected('Feed'); setShowMessage(false) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'Feed' ? <MdDashboardCustomize style={{ color: `#fc8c46`, fontSize: "1.9vw", marginRight: "1vw" }} /> : <MdDashboardCustomize style={{ color: `#888A93`, fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'Feed' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>Feed</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>Feed</div>}
                    </div>
                    {pageSelected == 'Feed' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div onClick={() => { setPageSelected('Explore'); setShowMessage(false) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'Explore' ? <FiSearch style={{ color: '#fc8c46', fontSize: "1.9vw", marginRight: "1vw" }} /> : <FiSearch style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'Explore' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>Explore</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>Explore</div>}
                    </div>
                    {pageSelected == 'Explore' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div onClick={() => { setPageSelected('Notif'); setShowMessage(false) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'Notif' ? <BsBell style={{ color: '#fc8c46', fontSize: "1.9vw", marginRight: "1vw" }} /> : <BsBell style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'Notif' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>Notifications</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>Notifications</div>}
                        {pageSelected == 'Notif' ? <div style={{ marginRight: "2vw", fontSize: "1vw", }}>4</div> : <div style={{ marginRight: "2vw", fontSize: "1vw", color: '#606371' }}>4</div>}

                    </div>
                    {pageSelected == 'Notif' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div onClick={() => { setPageSelected('Direct'); setShowMessage(true) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'Direct' ? <FiSend style={{ color: '#fc8c46', fontSize: "1.9vw", marginRight: "1vw" }} /> : <FiSend style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'Direct' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>Direct</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>Direct</div>}
                        {pageSelected == 'Direct' ? <div style={{ marginRight: "2vw", fontSize: "1vw" }}>4</div> : <div style={{ marginRight: "2vw", fontSize: "1vw", color: '#606371' }}>4</div>}
                    </div>
                    {pageSelected == 'Direct' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div onClick={() => { setPageSelected('IG'); setShowMessage(false) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'IG' ? <BiSlideshow style={{ color: '#fc8c46', fontSize: "1.9vw", marginRight: "1vw" }} /> : <BiSlideshow style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'IG' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>IG TV</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>IG TV</div>}
                    </div>
                    {pageSelected == 'IG' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div onClick={() => { setPageSelected('Stats'); setShowMessage(false) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'Stats' ? <BiStats style={{ color: '#fc8c46', fontSize: "1.9vw", marginRight: "1vw" }} /> : <BiStats style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'Stats' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>Stats</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>Stats</div>}
                    </div>
                    {pageSelected == 'Stats' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div onClick={() => { setPageSelected('Settings'); setShowMessage(false) }} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center", flex: 1 }}>
                        {pageSelected == 'Settings' ? <FiSettings style={{ color: '#fc8c46', fontSize: "1.9vw", marginRight: "1vw" }} /> : <FiSettings style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />}
                        {pageSelected == 'Settings' ? <div style={{ width: "5vw", textAlign: 'initial', flex: 1 }}>Settings</div> : <div style={{ width: "5vw", textAlign: 'initial', flex: 1, color: '#888A93' }}>Settings</div>}
                    </div>
                    {pageSelected == 'Settings' ? <div style={{ borderRight: '3.2px solid #fc8c46', height: '2vh', alignItems: 'flex-end' }}></div> : <div style={{ borderRight: '3.2px solid transparent', height: '2vh', alignItems: 'flex-end' }}></div>}
                </div>
                <div style={{ borderBottom: '1px solid #565965', margin: 15 }}></div>
                <div onClick={() => { window.location = "https://www.cluzel-killian.fr/" }} style={{ height: "6vh", display: 'flex', marginLeft: "1vw", alignItems: "center" }}>
                    <MdLogout style={{ color: '#888A93', fontSize: "1.9vw", marginRight: "1vw" }} />
                    <div style={{ width: "5vw", textAlign: 'initial', color: '#888A93' }}>Logout</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
