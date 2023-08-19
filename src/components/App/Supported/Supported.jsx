import {useState} from 'react'
import {useDispatch} from 'react-redux'

function Supported() {

    const dispatch = useDispatch()

    const [newSupport, setNewSupport] = useState('')

    const handleSupport = (event) => {
        event.preventDefault();
        console.log('value:', newSupport)
        if(newSupport > 5){
            alert('Please enter a number between 1-5!');
        }
        else{
            dispatch({
                type: 'SUPPORT',
                payload:newSupport
            })
        }
        
    }

    return (
        <>
            <h1>How well are you being
                supported?</h1>
            
            <form onSubmit={handleSupport}>
                <h4>support?</h4>
                <input 
                    type='number'
                    placeholder='Enter a number 1-5'
                    onChange={(event) => {
                        setNewSupport(event.target.value)
                    }}
                    value={newSupport}>
                </input>
                <button type='submit'>submit</button>
            </form>
        </>
    )

}

export default Supported