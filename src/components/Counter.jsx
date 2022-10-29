import { useState } from "react"

function Counter(props) {
    let [start, setStart] = useState(props.start)

    function plus(event) {
        setStart(start + 1)
    }

    function minus(event) {
        setStart(start - 1)
    }
    
    return (
        <div className="counter">
            <div className="num">{start}</div>
                <button onClick={plus} className="btn">+1</button>
                <button onClick={minus} className="btn">-1</button>
        </div>
    )
}

export default Counter