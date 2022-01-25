import React, { useEffect, useState, useRef } from 'react'
import { FiSend } from "react-icons/fi";
import entierAleatoire from './RandomNumber';
import { BsArrowLeft } from "react-icons/bs";



function ChatMessage({ arrayPseudo }) {
    const [messages, setMessages] = useState([])
    const [reponses, setReponses] = useState([])
    const [send, setSend] = useState('')
    const [isClicked, setIsClicked] = useState(false)
    const [msgPerson, setMsgPerson] = useState([])
    const [pseudoChose, setPseudoChose] = useState('')
    const [pseudoOld, setPseudoOld] = useState('')
    const [pseudoLogoChose, setPseudoLogoChose] = useState('')
    const messagesEndRef = useRef(null)

    useEffect(() => {
        setMsgPerson(afficherMsg())
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    useEffect(() => {
        if (pseudoChose != pseudoOld)
        {
            setMessages([])
            setReponses([])
        }
    }, [pseudoChose]);

    function afficherMsg() {
        const tab = [];

        for (let index = 0; index < 10; index++) {
            tab.push(
                <div key={index} onClick={() => { setPseudoChose(arrayPseudo[index]?.login?.username.slice(0, -3)); setPseudoLogoChose(`https://random.imagecdn.app/500/${500 + index}`); setIsClicked(true) }} style={{ display: 'flex', alignItems: 'center', marginLeft: 15, paddingTop: 15 }}>
                    <img style={{ width: "3.6vw", height: "3.6vw", borderRadius: 50, marginRight: 15 }} src={`https://random.imagecdn.app/500/${500 + index}`} alt="picture" />
                    <div style={{ flex: 1, textAlign: 'initial' }}> {arrayPseudo[index]?.login?.username.slice(0, -3)}</div>
                    <div style={{ marginRight: 15 }}>{entierAleatoire(1, 10)}j</div>
                </div>
            )
        }
        return tab;
    }


    function pushToArray() {
        let tmp = [...messages];
        tmp.push(send)
        setMessages(tmp)
        responseBot(send)
        setSend('')
    }

    function responseBot(msg) {
        if (msg == 'coucou' || msg == 'cc'  ) {
            let tmp = [...reponses];
            tmp.push("coucou ça va ?")
            setTimeout(() => { setReponses(tmp); }, 2000);
        }

        if (msg == 'oui') {
            let tmp = [...reponses];
            tmp.push("super")
            setTimeout(() => { setReponses(tmp); }, 2000);
        }

        if (msg == 'oui et toi' || msg == 'oui et toi ?') {
            let tmp = [...reponses];
            tmp.push("trql")
            setTimeout(() => { setReponses(tmp); }, 2000);
        }
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <div style={{ height: "100%", backgroundColor: '#282A34', borderRadius: 5 }}>
            {!isClicked ?
                <div>
                    Mes Messages
                    <div style={{ overflowX: 'scroll', height: '85vh' }}>{msgPerson}</div>
                </div> :
                <div>
                    <div style={{ paddingTop: "2vh" }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <BsArrowLeft onClick={() => { setIsClicked(false); setPseudoOld(pseudoChose) }} style={{ fontSize: "3vh", display: 'flex', marginLeft: "2vw" }} />
                            <div style={{ flex: 1 }}>{pseudoChose}</div>
                        </div>
                        <div style={{ marginTop: "5vh", overflowY: 'auto', height: '70vh', }}>
                            {messages.map((item, index) => (
                                <div key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <div style={{ display: 'flex', borderRadius: 10, padding: 5, justifyContent: 'flex-end', margin: 2, marginRight: 5, marginLeft: 5, borderStyle: 'solid', borderWidth: 0.2 }}>
                                            <div style={{ overflowWrap: 'break-word', maxWidth: '15vw' }}>{messages[index]}</div>
                                        </div>
                                    </div>
                                    {reponses[index] &&
                                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                            <div style={{ backgroundColor: '#3C3F51', display: 'flex', borderRadius: 10, padding: 5, margin: 2, marginRight: 5, marginLeft: 5, }}>
                                                <img style={{ width: "1.6vw", height: "1.6vw", borderRadius: 50, marginRight: 15 }} src={pseudoLogoChose} alt="picture" />
                                                <div style={{ overflowWrap: 'break-word', maxWidth: '15vw' }}>{reponses[index]}</div>
                                            </div>
                                        </div>}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#282A34', justifyContent: 'center', marginTop: '2vh' }}>
                        <input style={{ border: "solid", borderColor: 'white', borderWidth: 0.2, backgroundColor: '#282A34', padding: 2, paddingLeft: 10, width: '20vw', outline: 'none', fontSize: "0.9vw", borderRadius: 5, height: '4vh', color: 'white' }}
                            value={send}
                            onChange={e => setSend(e.target.value)}
                            placeholder='Message'
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    pushToArray()
                                }
                            }} />
                        <FiSend style={{ fontSize: '4vh', marginLeft: '1.5vw' }} onClick={() => pushToArray()} />
                    </div>
                </div>}
        </div>
    );
}

export default ChatMessage;
