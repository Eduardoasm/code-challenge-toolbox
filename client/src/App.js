import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar';
import FilesTable from './components/FilesTable';
import React from 'react';

function App() {
  const [search, setSearch] = React.useState("")
  return (
    <div className="App">
      <NavBar setSearch={setSearch} search={search}/>
      <FilesTable />
    </div>
  );
}

export default App;
