import { useState } from 'react'
import  {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Feedback() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newFeedback, setNewFeedback] = useState('')

    const handleFeedback = (event) => {
        event.preventDefault();
        console.log('value:', newFeedback);

        dispatch({
            type:'FEEDBACK',
            payload:newFeedback
        })
        history.push('/review');
    }

    return (
        <>
            <h1>Any comments you want
                to leave?</h1>

            <form onSubmit={handleFeedback}>
                <h4>comments</h4>
                <input
                    type='text'
                    placeholder="comment"
                    onChange={(event) => {
                        setNewFeedback(event.target.value)
                    }}
                    value={newFeedback}>
                </input>
                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Feedback
