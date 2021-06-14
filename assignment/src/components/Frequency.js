import React, { useState } from 'react'

function sortByFrequency(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];

    array.forEach(function (value) {
        if (value in frequency)
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });


    for (var key in frequency) {
        sortAble.push([key, frequency[key]])
    }

    sortAble.sort(function (a, b) {
        return b[1] - a[1]
    })


    sortAble.forEach(function (obj) {
        for (var i = 0; i < obj[1]; i++) {
            newArr.push(obj[0]);
        }
    })
    return newArr;

}

function Frequency() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setList([...list, item]);
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
                        sortByFrequency(list).map((data, index) => <li key={index}>{data}</li>)
                    }
                </ul>

            </div>
        </div>
    )
}

export default Frequency
