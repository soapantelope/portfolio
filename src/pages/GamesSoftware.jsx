import Wappa from '../../public/images/wappa.png'
import { Link, NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

export default function GamesSoftware() {
    return (
        <>
            <h1>GAMES AND SOFTWARE</h1>
            <div className="exampleContainer">
                <Example photo={Wappa} name="wappa"></Example>
                <Example photo={Wappa} name="wappa1"></Example>
                <Example photo={Wappa} name="wappa2"></Example>
            </div>
        </>
    )
}

function Example({ photo, name }) {
    return (
        <Link className="example" to={"./" + name}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
            >
                <img src={photo}></img>
                <h2>{name}</h2>
                <div className="exampleDescription">
                    wappa loves his mama!
                </div>
            </motion.div>
        </Link>

    )
}