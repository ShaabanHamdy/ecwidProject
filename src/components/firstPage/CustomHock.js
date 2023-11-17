import { useEffect, useState } from "react";

const RandomColor = () => {
    let [boxColor, setBoxColor] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBoxColor("#53FA8C")
        }, 6000)
        setTimeout(() => {
            setBoxColor("#FA53D5")
        }, 9000)
        setTimeout(() => {
            setBoxColor("#FA536C")
        }, 12000)
        setTimeout(() => {
            setBoxColor("#f11a1a")
        }, 15000)

        setTimeout(() => {
            setBoxColor("#9ff11a")
        }, 18000)

        setTimeout(() => {
            setBoxColor("#1a5bf1")
        }, 21000)

        setTimeout(() => {
            setBoxColor("#FAE053")
        }, 24000)

    }, [])


    return { boxColor }

}

export default RandomColor
