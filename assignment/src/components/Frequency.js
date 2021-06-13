import React, { useState } from 'react'

function Frequency() {
    const [item, setItem] = useState('');
    const [freq, setFreq] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const map = freq;

        if (map[item]) {
            map[item]++;
            setFreq({ ...freq })
        } else {
            map[item] = 1;
            setFreq({ ...freq })
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Input a number: </label>
                    <input type="text" value={item} onChange={e => setItem(e.target.value)} required />
                    <input type="submit" value="Add to list" />
                </form>
            </div>
            <div>
                <ul>
                    {
                        Object.keys(freq).map((data, index) => <li key={index}>{data} - {freq[data]}</li>)
                    }
                </ul>

            </div>
        </div>
    )
}

export default Frequency
