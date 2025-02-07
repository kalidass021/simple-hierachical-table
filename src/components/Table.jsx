import { tableHeads } from '../config/tableHeads';
import TableRow from './TableRow';

const Table = ({ data }) => {
  console.log('data', data);

  return (
    <div>
      <table className='min-w-full bg-white border border-gray-200'>
        <thead className=''>
          <tr className='bg-gray-100'>
            {tableHeads.map((tableHead) => (
              <th key={tableHead.label} className='py-2 px-4 border-b'>
                {tableHead.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 border-b'>Grand Total</td>
            <td className='py-2 px-4 border-b'>
              <button 
            //   onClick={() => caluculateGrandTotal(data)}
              >
                Calculate grand total
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
