import { useSelector } from "react-redux"

function Review() {

    const feelingReducers = useSelector(store => store.feeling)
    const understandingReducers = useSelector(store => store.understanding)
    const supportReducers = useSelector(store => store.support)
    const feedbackReducers = useSelector(store => store.feedback)

    console.log('Feelings:', feelingReducers)
    console.log('understanding:', understandingReducers)
    console.log('support:', supportReducers)
    console.log('Feedback:', feedbackReducers)

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                <h4>
                    <ul>
                        <li>Feelings: {feelingReducers}</li>
                        <li>Understanding: {understandingReducers}</li>
                        <li>Support: {supportReducers}</li>
                        <li>Comments: {feedbackReducers}</li>
                    </ul>
                </h4>
            </div>

        </>
    )
}

export default Review