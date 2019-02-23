let Header = () => {
  return <span>
  {/* Design a header for your blog */}
  First React JSX Exercise
  </span>
}
let Article = () => {
  return <span>
  {/* Write and design your blog article */}
  <p>Spicy jalapeno bacon ipsum dolor amet qui anim alcatra, ullamco est sint shoulder in ground round ipsum laborum dolore proident minim. Ex beef tempor dolor strip steak sed ham fatback swine boudin pancetta mollit shank. Pariatur andouille pork loin ullamco culpa flank. Irure pork fugiat landjaeger, pork loin andouille ham hock. Venison filet mignon in, mollit chuck do reprehenderit beef fugiat sed capicola ut. Exercitation spare ribs adipisicing, filet mignon sausage boudin ham beef kevin. Officia ex beef ribs do shankle voluptate.</p>
  <p>Ad enim flank dolore salami cupim pork shank. Buffalo nostrud biltong elit cow boudin proident shankle pork chop. Velit officia voluptate adipisicing magna. Fatback est cupidatat, ex capicola cillum kevin pig doner tenderloin. Laborum venison ut, ham dolor cow laboris lorem. Adipisicing aliquip meatball laboris. Minim picanha laboris proident anim jowl beef ribs in burgdoggen.</p>
  </span>
}
let Footer = () => {
  return <span>
  {/* Design a footer for your blog */}
  That's all folks
  </span>
}

let Blog = () => {
  return <div>
    {/* Make this Component render the header, article, and footer */}
    <h1>
      <Header />
    </h1>
    <h2>
      <Article />
    </h2>
    <h3>
      <Footer />
    </h3>
  </div>
}

ReactDOM.render(<Blog />, document.getElementById('root'))
