import Logo from '../../../public/images/tossit/logocombined.png'
import SS1 from '../../../public/images/tossit/tossit3.png'
import RoleBar from '../../RoleBar'
import Awards from '../../Awards'

export default function Tossit() {

    const roles = [
        { name: "React.js" },
        { name: "Framer Motion" },
        { name: "Photoshop" },
        { name: "Illustrator" },
    ]

    const awards = [
        { name: "TSA Nationals (Software Development) #1" },
    ]

    return (
        < >
            <img className='bigImage' id='tossImage' src={SS1}></img>
            <img id="tossLogo" src={Logo}></img>
            <RoleBar roles={roles}></RoleBar>

            <div className='infoContainer'>
                <div className="info">Toss-It is an educational web software that can be used in virtual and in-person classrooms
                    to review material in an engaging way. First, teachers host rooms that students can join through room codes.
                    When the activity starts, students are prompted write their own quiz questions, and then to "toss" them to other
                    students to answer.
                </div>
            </div>

            <h4>AWARDS</h4>
            <Awards className='awards' awards={awards}></Awards>


        </>
    )
}