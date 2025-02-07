import { useState } from 'react';

const TableRow = ({ row }) => {
  const [inputValue, setInputValue] = useState('');
  const [variance, setVariance] = useState(0);

    const handleAllocationPercent = () => {
        const percentValue = parseFloat(inputValue);
        const newValue = row.value + (row.value * percentValue) / 100;
        const varPercent = ((newValue - row.value) / row.value) * 100;
        setVariance(varPercent);
    }

    const hanleAllocationValue = () => {
        const newValue = parseFloat(inputValue);
        const varPercent = ((newValue - row.value) / row.value) * 100;
        setVariance(varPercent);
    }

  return (
    <>
      <tr className='bg-white border-b'>
        <td className='py-2 px-4 border-b'>{row.label}</td>
        <td className='py-2 px-4 boder-b'>{row.value}</td>
        <td className='py-2 px-4 border-b'>
          <input
            type='number'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='border rounded px-2 py-2 w-full'
          />
        </td>
        <td className='py-2 px-4 border-b'>
          <button
            onClick={handleAllocationPercent}
            className='bg-blue-500 text-white rounded px-3 py-1'
          >
            Apply %
          </button>
        </td>
        <td className='py-2 px-4 border-b'>
          <button
            className='bg-green-500 text-white rounded px-3 py-1'
            onClick={hanleAllocationValue}
          >
            Apply val
          </button>
        </td>
        <td className='py-2 px-4 border-b'>{variance} %</td>
      </tr>
      {row.children &&
        row.children.map((child) => (
            <TableRow key={child.id} row={child} />
            ))}
    </>
  );
};

export default TableRow;
