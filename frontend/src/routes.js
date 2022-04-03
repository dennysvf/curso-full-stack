import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import SignIn from '../src/pages/public/SignIn';
import SignUp from '../src/pages/public/SignUp';

function Home() {
  return (
    <div>
      <Menu />
      <h2>Dashboard</h2>
    </div>
  )
}

function Contacts() {
  let {path, url} = useRouteMatch();

  return (
    <div>
      <Menu />
      <h2>Lista contatos</h2>
      <ul>
        <li>
          <Link to={`${url}/1`}>Contato A</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>Contato B</Link>
        </li>
        <li>
          <Link to={`${url}/3`}>Contato C</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path} />
        <Route path={`${path}/:contactId`}>
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

function Contact() {
  let { contactId } = useParams();

  return (
    <div>
      <h3>Contato: {contactId}</h3>
    </div>
  )
}

function Messages() {
  let {path, url} = useRouteMatch();

  return (
    <div>
      <Menu />
      <h2>Lista de mensagens</h2>
      <ul>
        <li>
          <Link to={`${url}/1`}>Mensagem enviada A</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>Mensagem enviada B</Link>
        </li>
        <li>
          <Link to={`${url}/3`}>Mensagem enviada C</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path} />
        <Route path={`${path}/:messageId`}>
          <Message />
        </Route>
      </Switch>
    </div>
  )
}

function Message() {
  let { messageId } = useParams();

  return (
    <div>
      <h3>Mensagem: {messageId}</h3>
    </div>
  )
}

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/contacts">Contatos</Link>
      </li>
      <li>
        <Link to="/messages">Mensagens</Link>
      </li>
      <li>
        <Link to="/singin">Sair</Link>
      </li>
    </ul>
  )
}

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}