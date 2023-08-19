import { useState } from 'react'

function Understanding() {

    const [newUnderstand, setNewUnderstand] = useState('')

    const handleUnderstand = (event) => {
        event.preventDefault();
        console.log('the value:', newUnderstand)

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