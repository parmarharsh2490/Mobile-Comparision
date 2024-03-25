import data from '../../data/data.json'
import  './Layout.css'
const layout = () => {
 
    const phone = data;
  return (
    <div>
      <table className='table-auto h-full w-full sm:text-base md:text-lg lg:text-xl'>
        <thead>
            <th className='lg:text-2xl'>Mobile Phone</th>
            {
                phone.map((name)=>(
                    <th  className='lg:text-2xl'>{name.model}</th>
                ))
            }
        </thead>
        <tbody>
            <tr>
            <td className=''>Display Type</td>
            {
                phone.map((name)=>(
                    <th className='font-normal'>{name.display_type}</th>
                ))
                }
            </tr>
            <tr>
            <td >Display Type</td>
            {
                phone.map((name)=>(
                    <th className='font-normal'>{name.display_type}</th>
                ))
                }
            </tr>
            <tr>
            <td>Charging speed</td>
            {
                phone.map((name)=>(
                    <th className='font-normal'>{name.charging_speed}</th>
                ))
                }
            </tr>
            <tr>
            <td>Camera</td>
            {
                phone.map((name)=>(
                    <th className='font-normal'>{name.camera}</th>
                ))
                }
            </tr>
            <tr>
            <td>Battery</td>
            {
                phone.map((name)=>(
                    <th className='font-normal'>{name.battery}</th>
                ))
                }
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default layout
