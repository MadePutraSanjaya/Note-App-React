import React from 'react';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';

function App() {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Note App</h1>
        <NoteForm />
        <NoteList />
      </div>
    </>
  );
}

export default App;
