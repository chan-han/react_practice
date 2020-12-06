import React , {useState} from 'react';


const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChageUsername = e => setUsername(e.target.value);
    const onChageMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ':' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChageUsername}/>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세"
                value={message}
                onChange={onChageMessage}
                onKeyPress={onKeyPress}/>
                <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;