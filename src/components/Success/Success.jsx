import { useDispatch } from "react-redux"
import  {useHistory} from 'react-router-dom';

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();

    const styling = {
        border: '5px',
        borderStyle: 'solid',
        borderColor: "black",
        padding: '10px',
        marginLeft: '10px',
        marginRight: '10px'
    }

    const handleNewFeedback = () => {
        
        console.log('in this')
        dispatch({
            type: 'EMPTY'
        })

        history.push('/')

    }

    return (
        <>
            <h1 style={styling}>✨Feedback!</h1>

            <div>
                <h1 style={styling}>Thank You!</h1>
                <button onClick={handleNewFeedback}>Leave New Feedback</button>
            </div>


        </>
    )

}

export default Success;