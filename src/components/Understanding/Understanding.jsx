import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newUnderstand, setNewUnderstand] = useState('')

    const handleUnderstand = (event) => {
        event.preventDefault();
        console.log('the value:', newUnderstand)
        if(newUnderstand > 5 || newUnderstand < 1){
            alert('Enter a number between  1-5!')
        }
        else{
            dispatch({
                type:'UNDERSTANDING',
                payload: newUnderstand
            })
            history.push('/supported');
        }
        setNewUnderstand('')
    }

    return (
        <>
            <h1>How well  are you understanding
                the content?</h1>

            <form onSubmit={handleUnderstand}>
                <h4>understanding?</h4>
                <input
                    type='number'
                    placeholder="Enter a number 1-5"
                    onChange={event => {
                        setNewUnderstand(event.target.value)
                    }}
                    value={newUnderstand}>
                </input>

                <button type='submit'>Next</button>
            </form>
        </>
    )

}

export default Understanding;