import '../App.css';
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill } from "react-icons/bs";

const Dice = (props) => {
    const constMap = {
        0: <BsFillDice1Fill size={100}/>,
        1: <BsFillDice2Fill size={100}/>,
        2: <BsFillDice3Fill size={100}/>,
        3: <BsFillDice4Fill size={100}/>,
        4: <BsFillDice5Fill size={100}/>,
        5: <BsFillDice6Fill size={100}/>,
    }

    return (
        <div className="dice">{constMap[[props.val]]}</div>
    );
}

export default Dice;