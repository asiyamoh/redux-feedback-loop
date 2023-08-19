import {useState} from 'react'
import {useDispatch} from 'react-redux'

function Feeling() {

    const dispatch = useDispatch();

    const [newFeelings, setNewFeelings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The value is:', newFeelings)
        if(newFeelings > 5){
            alert('Enter a Number between 1-5!')
        }
        else{
            dispatch({
                type: 'FEELING',
                payload: newFeelings
            })
        }

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
                <button type="submit">Submit</button>
            </form>


        </>
    )

}

export default Feeling;