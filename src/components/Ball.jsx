import { useEffect } from 'react';

function Ball() {
    useEffect(() => {
        const square = document.querySelector('.square')
        const ball = document.querySelector('.ball')
        const width = square.clientWidth - ball.clientWidth
        let height = square.clientWidth - ball.clientWidth

        let directionLeft = Math.random() * 10
        let directionTop = Math.random() * 10


        function animate() {
            let left = +(ball.style.left.slice(0, ball.style.left.length -2))
            let top = +(ball.style.top.slice(0, ball.style.top.length -2))
            ball.style.left = (left + directionLeft) + "px"
            ball.style.top = (top + directionTop) + "px"

            if (left >= width) {
                directionLeft = -1 * Math.abs(directionLeft)
            }
            if (left <= 0) {
                directionLeft = Math.abs(directionLeft)
            }

            if (top >= height) {
                directionTop = -1 * Math.abs(directionTop)
            } 
            if (top <= 0) {
                directionTop = Math.abs(directionTop)
            }

            requestAnimationFrame(animate)
        }
        animate()
    }, [])
    
    return (<div className="square">
        <div className="ball"></div>
    </div>
    )
}

export default Ball