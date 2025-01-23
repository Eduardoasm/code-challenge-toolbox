import React from 'react';
import NavBar from './components/NavBar';
import FilesTable from './components/FilesTable';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

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
