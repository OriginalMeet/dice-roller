import '../App.css';
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill } from "react-icons/bs";

const Dice = (props) => {
    const constMap = {
        0: <BsFillDice1Fill />,
        1: <BsFillDice2Fill />,
        2: <BsFillDice3Fill />,
        3: <BsFillDice4Fill />,
        4: <BsFillDice5Fill />,
        5: <BsFillDice6Fill />,
    }

    return (
        <>{constMap[[props.val]]}</>
    );
}

export default Dice;