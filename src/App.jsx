import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import { initialData } from './utils/initialData';

const App = () => {
  const [data, setData] = useState(initialData);
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Simple Hierarchical Table</h1>
      <Table data={data} />
    </div>
  )
}

export default App;