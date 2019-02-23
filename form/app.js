let TextInput = (prop) => {
  return <span>
    <input type='text' placeholder={prop.tag} />
  </span>
}

let YesNoRadio = () => {
  return <span>
    <input type='radio' />
  </span>
}

let SubmitButton = () => {
  return <span>
    <input type="submit" value='Submit'/>
  </span>
}

let Form = () => {
  return <form>
  {/* Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button  */}
  <div>
    <TextInput tag='1'/>
    <TextInput tag='2'/>
    <TextInput tag='3'/>
  </div><br/>
  <div>
    <YesNoRadio />Yes
    <YesNoRadio />No
  </div><br />
  <div>
    <SubmitButton />
  </div><br />
  </form>
}


ReactDOM.render(<Form />, document.getElementById('root'))