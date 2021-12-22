
import { useState } from "react"
import { timestamp, firestore } from "../firebase"
import { useAuthContext } from "../hooks/useAuthContext"
import { Link as LinkNeedsStyle } from "react-router-dom"

// styles
import styled from "styled-components"

import { SearchButton } from "./Header"
import CommentSingle from "./CommentSingle"


const Comments = ({ videoID, videoInQ }) => {
  const { user } = useAuthContext()
  const [comment, setComment] = useState('')

  const submitHandler = async e => {
    e.preventDefault()

    // error here createAt instead of createdAt !!!
    const newComment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      comment: comment,
      createAt: timestamp.fromDate(new Date()),
      cid: Date.now(), // commentID
      likes: 0,
    }

    // update doc
    const updateDocument = async (id, updates) => {
      try {
        const updateDocument = await firestore.collection('videos').doc(id).update(updates)
      } catch (error) {
        console.log(error)
      }
    }

    await updateDocument(videoID, {
      comments: [newComment, ...videoInQ.comments],
    })
    setComment('')
    
  }


  return (
    <CommentsMainDiv >
      {user && <CommentsTitle>Comments </CommentsTitle>}
      {!user && <CommentsTitle>Comments <GreyMessage> &nbsp;<strong>::</strong>&nbsp; you must be <Link to="/login">signed in</Link> to comment!</GreyMessage></CommentsTitle>}
      {user && <Form name="add_comments_form" onSubmit={submitHandler}>
        <label htmlFor="comment"></label>
        <Input type="text" required name="comment" id="comment" placeholder="Type your comment here..." onChange={e => setComment(e.target.value)} value={comment} />
        <CommentBtn>Add comment</CommentBtn>
      </Form>}
      <CommentWrapper>
        {videoInQ.comments.length > 0 && videoInQ.comments.map(e => <CommentSingle e={e} key={e.cid} />)}
      </CommentWrapper>
    </CommentsMainDiv>
  )
}

const CommentsMainDiv = styled.div`
  margin-top: 40px;
`

const CommentWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const CommentsTitle = styled.h6`
  font-size: 1rem;
  font-weight: 400;

`
const GreyMessage = styled.span`
  display: inline;
  font-size: 1rem;
  font-weight: 400;
  color: ${p => p.theme.fifthCol};
`

const Form = styled.form`

`

const Input = styled.input`
  width: 100%;
  font-size: 0.9rem;
  color: white;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${p => p.theme.fourthCol};
  padding: 10px;

  ::placeholder {
    color: ${p => p.theme.fourthCol};
  }
`

const CommentBtn = styled(SearchButton)`
  margin-top: 10px;
  width: 140px;
  color: ${p => p.theme.textCol};
  font-size: 0.8rem;
`

const Link = styled(LinkNeedsStyle)`
  color: ${p => p.theme.fourthCol};
`

export default Comments