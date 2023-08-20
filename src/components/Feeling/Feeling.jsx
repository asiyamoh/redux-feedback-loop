import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newFeelings, setNewFeelings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The value is:', newFeelings)
        if (newFeelings > 5 || newFeelings < 1) {
            console.log('hey  in!')
            alert('Enter a Number between 1-5!')
        }
        else {
            dispatch({
                type: 'FEELING',
                payload: newFeelings
            })
            history.push('/understanding')
        }
        setNewFeelings('');
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <h4>feeling?</h4>
                <input
                    type="number"
                    placeholder="Enter a number 1-5"
                    onChange={event => {
                        setNewFeelings(event.target.value)
                    }}
                    value={newFeelings}>
                </input>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;