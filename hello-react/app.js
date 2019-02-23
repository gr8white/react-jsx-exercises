const MyFirstComponent = (props) => {
  return (
    <div>
      <h2 classname='my-Class'>
        This is a {props.name} that I made.
      </h2>
      <div classname='blog-buddy'>
        {props.children}
      </div>
    </div>
  )
}

const myElement = (<div>
  Hello world! {3 + 4}
  <h1>Swag swag swag</h1>
  <MyFirstComponent name='banana'>
  </MyFirstComponent>
  <MyFirstComponent name='apple' />
  <MyFirstComponent name='strawberry' />
</div>)

ReactDOM.render(myElement, document.getElementById('root'))
