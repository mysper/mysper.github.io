import { useState } from 'react';
import '../style/Private.scss';

function PrivateLogin() {
    const [PW, setPW] = useState('');
    function click() {
        console.log(PW);
    }
    function onchange(e) {
        setPW(e.target.value);
    }
    return (
        <div id="private_login">
            <input className="pw_input" type="password" placeholder="password" onChange={onchange} />
            <button onClick={click}>Submit</button>
        </div>
    )
}

export default PrivateLogin;