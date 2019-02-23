// Make this component render an image
let ProfilePic = () => {
  return (
    <img variant='top' src='Headshot.png' />
  )
}

// Make this component render a username in bold above the comment text
let CommentBody = (prop) => {
  return (
    <div>
      <h1>{prop.username}</h1>
      <p>{prop.comment}</p>
    </div>
  )
}

// Make each comment render a profile picture and the comment body
let Comment = (prop) => {
  return <div style={{ width: '18rem' }} className='card'>
    <ProfilePic />
    <CommentBody username={prop.username} comment={prop.comment} />
  </div>
}

// Make this component render a list of comments
let Comments = () => {
  return <div>
    <Comment username='gr8white' comment='Spicy jalapeno bacon ipsum dolor amet ham hock sirloin chicken, cow porchetta shank tenderloin leberkas cupim capicola pork loin rump. Bresaola jerky shoulder spare ribs turducken shank. Rump biltong pork loin, doner salami pancetta fatback leberkas kevin. Pancetta corned beef andouille ground round cupim, pig cow meatball tongue jerky frankfurter buffalo. Ground round corned beef chicken cow bresaola kevin. Hamburger kielbasa tail, kevin boudin cupim t-bone short ribs leberkas brisket short loin strip steak beef ribs salami tenderloin.' />
    <Comment username='gr8white' comment='swag swag' />
    <Comment username='gr8white' comment='Meatball ham hock flank frankfurter, strip steak pork chop bacon bresaola. Picanha turkey beef ribs shoulder turducken beef capicola corned beef chuck short loin kielbasa strip steak frankfurter alcatra. Drumstick short loin picanha tongue. Short ribs porchetta bacon pancetta ribeye brisket.' />
  </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))
