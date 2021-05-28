import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export const NewVote = (props) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const numUpvotes = useSelector(state => state.suggs.new.upvotes)
    const numDownvotes = useSelector(state => state.suggs.new.downvotes)
    const [upvotes, setUpvotes] = useState(numUpvotes)
    const [downVotes, setDownvotes] = useState(numDownvotes)
    debugger
    const handleUpvote = e => {
        if (e.target.value === 'up') {   
            setUpvotes(upvotes.concat(currentUser))
        } else {
            setDownvotes(downvotes.concat(currentUser))
            
        }
    }

//   const handleKeyDown = e => {
//     const trimmedText = e.target.value.trim()
//     // If the user pressed the Enter key:
//     if (e.key === 'Enter' && trimmedText) {
//       // Dispatch the "todo added" action with this text
//       dispatch({ type: 'todos/todoAdded', payload: trimmedText })
//       // And clear out the text input
//       setText('')
//     }
//   }

  return (
    <div>
        <i onClick={() => handleUpvote} value='up' className="button-updown fas fa-arrow-alt-circle-up fa-2x"></i>
        <i onClick={() => handleUpvote} value='down' className="button-updown fas fa-arrow-alt-circle-down fa-2x"></i>
    </div>
  )
}