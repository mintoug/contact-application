import React, {useState, useEffect} from "react";
import {BrowwserRouter as Router,Switch, Route} from 'react-router-dom'
import {uuid} from "uuidv4";
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
 
function App() {
const LOCAL_STORAGE_KEY ='contacts'
const  [contacts, setContacts] = useState([]);

const addContactHandler = (contact) =>{
  console.log(contact);
  setContacts([...contacts, { id: uuid(), ...contact}]);
};

const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact)=> {
    return contact.id !== id;
  });
  setContacts(newContactList); 
}
useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContacts(retriveContacts)
}, [contacts]);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts));
}, [contacts]);
  return (
   <div className="ui container">
     <Router>
     <Header/>
     <Switch>
     <Route path="/add" component ={addContact} />
     <Route path="/" component={contactList} />
     </Switch>
    {/* <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts} getContactId = {removeContactHandler}/> */}
     </Router>
     
   </div>
  );
}

export default App;
