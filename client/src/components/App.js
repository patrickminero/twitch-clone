import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
 
const App = () =>{
  return(
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/new" component={StreamCreate} />          
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;