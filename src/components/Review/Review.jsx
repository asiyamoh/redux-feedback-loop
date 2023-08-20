import { useSelector } from "react-redux"
import axios from 'axios'
import {useHistory} from 'react-router-dom'



function Review() {

    const history = useHistory();

    const feelingReducers = useSelector(store => store.feeling)
    const understandingReducers = useSelector(store => store.understanding)
    const supportReducers = useSelector(store => store.support)
    const feedbackReducers = useSelector(store => store.feedback)

    const handleSubmit = () => {

        const newData = {
            feelingReducers,
            understandingReducers,
            supportReducers,
            feedbackReducers
        };
        console.log('New data:', newData)


        axios.post('/review', newData)
            .then((response) => {
            }).catch((error) => {
                console.log('Error with the POST', error)
            })

        history.push('/success');
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                <h4>
                    <ul style={{ listStyle: "none" }}>
                        <li>Feelings: {feelingReducers}</li>
                        <li>Understanding: {understandingReducers}</li>
                        <li>Support: {supportReducers}</li>
                        <li>Comments: {feedbackReducers}</li>
                    </ul>
                </h4>
                    <button onClick={handleSubmit}>SUBMIT</button>
            </div>

        </>
    )
}

export default Review