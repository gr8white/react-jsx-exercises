let ListGroupItem = (props) => {
    return <span>
    {/* Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a> */}
      <li className="list-group-item">{props.item}</li>
    </span>
}

let ListGroup = () => {
    return <span >
      <ul className="list-group" style= {{width: "50%"}}>
        <ListGroupItem item='Chicken Wings'/>
        <ListGroupItem item='Quesadillas'/>
        <ListGroupItem item='Pastrami Sandwiches'/>
        <ListGroupItem item='Jerk Chicken'/>
      </ul>
    </span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))