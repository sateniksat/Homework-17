import React,{useContext} from 'react'
import { AllItemsContext } from "../Context/AllItemsContext";

function SelectedItems() {
  const { checked } = useContext(AllItemsContext);
  return (
    <table className='SelectedItems'>
    <thead>
    <tr>
      <th>SelectedItems</th>
    </tr>
    </thead>
    <tbody>
      {checked.map((item) => {
        return (
          <tr  key={item.id}>
            <td  key={item.id}>
              {item.title}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default SelectedItems