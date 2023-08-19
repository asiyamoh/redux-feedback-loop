import { useState } from 'react'
import  {useDispatch} from 'react-redux'

function Feedback() {

    const dispatch = useDispatch();

    const [newFeedback, setNewFeedback] = useState('')

    const handleFeedback = (event) => {
        event.preventDefault();
        console.log('value:', newFeedback);

        dispatch({
            type:'FEEDBACK',
            payload:newFeedback
        })
                
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
                <button type='submit'>submit</button>
            </form>






        </>
    )

}

export default Feedback
