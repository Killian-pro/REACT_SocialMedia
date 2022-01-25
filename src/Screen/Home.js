import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../Component/Sidebar'
import { BsBell } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import './Scroll.css'
import useDraggableScroll from 'use-draggable-scroll'
import ChatMessage from '../Component/ChatMessage';
import entierAleatoire from '../Component/RandomNumber';

function afficherStory() {
    const tab = [];

    for (let index = 0; index < 20; index++) {
        tab.push(
            <div key={index} style={{ width: "5vw", height: "5vw", borderRadius: 50, backgroundImage: `linear-gradient(to top right, #E2336B, #FCAC46)`, alignItems: 'center', justifyContent: 'center', display: 'flex', marginRight: 20, padding: 2 }}>
                <div style={{ width: "5vw", height: "5vw", borderRadius: 50, backgroundColor: '#3C3F51', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <img style={{ width: "4.6vw", height: "4.6vw", borderRadius: 50 }} src={`https://random.imagecdn.app/500/${entierAleatoire(400, 550)}`} alt="picture" />
                </div>
            </div>
        )
    }
    return tab;
}


function card(nbPhoto, arrayPseudo, isLatest) {
    const tab = [];

    for (let index = 0; index < nbPhoto; index++) {
        tab.push(
            <div key={index}>
                <img style={{ borderRadius: 25, backgroundColor: '#02339e', width: '23vw' }} src={`https://random.imagecdn.app/500/${entierAleatoire(300, 600 + (entierAleatoire(0, 1) * index))}`} alt="picture" />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                        <div style={{ width: 29, height: 29, borderRadius: 50, backgroundImage: `linear-gradient(to right, #E2336B, #FCAC46)`, alignItems: 'center', justifyContent: 'center', display: 'flex', marginRight: 10, padding: 2 }}>
                            <div style={{ width: 29, height: 29, borderRadius: 50, backgroundColor: '#3C3F51', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <img style={{ width: 23, height: 23, borderRadius: 50 }} src={`https://random.imagecdn.app/500/${entierAleatoire(300, 350)} `} alt="picture" />
                            </div>
                        </div>
                        {arrayPseudo[entierAleatoire(0, 99)]?.login?.username}
                    </div>
                    <div style={{ marginLeft: 5, marginRight: 5 }}>
                        <BsHeart />
                        &nbsp;
                        {isLatest ? entierAleatoire(0, 50) : entierAleatoire(0, 1000)}
                    </div>
                    <div style={{ marginLeft: 5, marginRight: 5 }}>
                        <BsChat />
                        &nbsp;
                        {isLatest ? entierAleatoire(0, 20) : entierAleatoire(0, 200)}
                    </div>
                </div>
            </div>
        )
    }
    return tab;
}

function Home() {
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref);
    const [nbPhoto, setNbPhoto] = useState(3)
    const [isLatest, setIsLatest] = useState(false)
    const [arrayPseudo, setArrayPseudo] = useState([])
    const [stories, setStories] = useState([])
    const [rCards, setRCards] = useState([])
    const [lCards, setLCards] = useState([])
    const [mCards, setMCards] = useState([])
    const [showMessage, setShowMessage] = useState(false)
    const [pageSelected, setPageSelected] = useState('Feed')


    useEffect(() => {
        randomName()
        setStories(afficherStory())
    }, [])

    useEffect(() => {
        if (arrayPseudo.length > 1 && nbPhoto < 4) {
            setRCards(card(nbPhoto, arrayPseudo, isLatest))
            setLCards(card(nbPhoto, arrayPseudo, isLatest))
            setMCards(card(nbPhoto, arrayPseudo, isLatest))

        }
        if (nbPhoto > 4) {
            setRCards(rCards.concat(card(nbPhoto, arrayPseudo, isLatest)));
            setLCards(lCards.concat(card(nbPhoto, arrayPseudo, isLatest)));
            setMCards(mCards.concat(card(nbPhoto, arrayPseudo, isLatest)));
        }
    }, [nbPhoto, arrayPseudo, isLatest])

    async function randomName() {
        const response = await fetch(`https://randomuser.me/api/?results=100`);
        const data = await response.json();
        setArrayPseudo(data?.results)
    }


    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#282A34', color: 'white', fontSize: "1vw" }}>
            <Sidebar setPageSelected={setPageSelected} pageSelected={pageSelected} setShowMessage={setShowMessage} />
            <div style={{ backgroundColor: '#3C3F51', flex: 1, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, paddingTop: 1, paddingLeft: '1.5vw', width: '70vw' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '1.5vw' }}>
                    <div style={{ flex: 1, textAlign: 'initial' }}>
                        <div style={{ border: "1px solid #4f5262", backgroundColor: '#4f5262', width: "15vw", alignItems: 'center', display: 'flex', borderRadius: 10 }}>
                            <FiSearch style={{ margin: 10 }} />
                            <input style={{ border: "none", backgroundColor: '#4f5262', paddingTop: 2, color: 'white', width: '10vw', outline: 'none', fontSize: "0.9vw" }} placeholder='Rechercher' />
                        </div>
                    </div>
                    <BsBell style={{ margin: 10 }} />
                    <FiSend onClick={() => { setShowMessage(!showMessage) ; !showMessage? setPageSelected('Direct') : setPageSelected('Feed') }} style={{ margin: 10 }} />
                    {/* <div style={{ margin: 10, display: 'flex', alignItems: 'center' ,borderRadius:15,backgroundImage:`linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,padding:10 }} > */}
                    <div style={{ margin: 10, display: 'flex', alignItems: 'center', borderRadius: 10, backgroundImage: `linear-gradient(to right, #E2336B, #FCAC46)`, padding: 10 }} >
                        <IoAddCircleOutline style={{ marginRight: 5 }} />
                        Add photo
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: 'initial', fontWeight: 'bold', fontSize: '1.5vw', marginTop: 5 }}>
                        Stories
                    </div>
                    <div onMouseDown={onMouseDown} ref={ref} style={{ marginTop: 10, display: 'flex', overflowX: 'scroll', width: '79.5vw' }}>
                        <div style={{ width: "5vw", height: "5vw", borderRadius: 50, backgroundColor: '#02339e', alignItems: 'center', justifyContent: 'center', display: 'flex', marginRight: 20, padding: 2 }}>
                            <div style={{ width: "5vw", height: "5vw", borderRadius: 50, backgroundColor: '#3C3F51', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <img style={{ width: "4.6vw", height: "4.6vw", borderRadius: 50, backgroundColor: '#02339e' }} src={"https://images.unsplash.com/photo-1610068071990-49c06875e0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="picture" />
                                {/* <div style={{position:'absolute',backgroundColor:'#02339e',width: 78, height: 78, borderRadius: 78 ,textAlign:"center",opacity:'0.29'}}/>
                                <div style={{position:'absolute',textAlign:"center",fontSize:25}}><MdAdd/></div> */}
                            </div>
                        </div>
                        {stories}
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, marginRight: '1.5vw' }} >
                        <div style={{ fontWeight: 'bold', fontSize: '1.5vw', flex: 1, textAlign: 'initial' }}>
                            Feed
                        </div>
                        <div style={{ marginRight: 15 }}>
                            <div onClick={() => { setIsLatest(true); setNbPhoto(3) }}>
                                Latest
                            </div>
                            {isLatest ? <div style={{ height: 20 }}>.</div> : <div style={{ height: 20 }}></div>}
                        </div>
                        <div style={{ marginRight: 15 }}>
                            <div onClick={() => { setIsLatest(false); setNbPhoto(3) }}>
                                Popular
                            </div>
                            {!isLatest ? <div style={{ height: 20 }}>.</div> : <div style={{ height: 20 }}></div>}
                        </div>
                    </div>
                    <div style={{ overflowY: 'scroll', marginTop: 10, height: '63vh', }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '22vw', margin: "1vw", marginRight: "2vw" }}>
                                {rCards}
                            </div>
                            <div style={{ width: '22vw', margin: "1vw", marginRight: "2vw" }}>
                                {mCards}
                            </div>
                            <div style={{ width: '22vw', margin: "1vw", marginRight: "3vw" }}>
                                {lCards}
                            </div>
                        </div>
                        <div onClick={() => { setNbPhoto(nbPhoto + 4) }} style={{ paddingBottom: 15 }}>
                            show more
                        </div>
                    </div>
                </div>
            </div>
             <div style={{ position: 'absolute', width: "27vw", height: '88vh', top: "10vh", left: "72vw", borderRadius: 5, boxShadow: "1px 1px 3px white",
                opacity: !showMessage ? "0" : "1", transition: "all .6s", visibility: !showMessage ? "hidden" : "visible", padding:5
                // , backgroundImage: `linear-gradient(to left top, #282A34, #888A93)`
            }}>
               {arrayPseudo.length>1 && <ChatMessage arrayPseudo={arrayPseudo} />}
            </div>
        </div>
    );
}

export default Home;
