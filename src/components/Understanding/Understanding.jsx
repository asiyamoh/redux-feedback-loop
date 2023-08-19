import { useState } from 'react'
import { useDispatch } from 'react-redux';

function Understanding() {

    const dispatch = useDispatch();

    const [newUnderstand, setNewUnderstand] = useState('')

    const handleUnderstand = (event) => {
        event.preventDefault();
        console.log('the value:', newUnderstand)
        if(newUnderstand > 5){
            alert('Enter a number between  1-5!')
        }
        else{
            dispatch({
                type:'UNDERSTANDING',
                payload: newUnderstand
            })
        }

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

                <button type='submit'>Submit</button>
            </form>
        </>
    )

}

export default Understanding;