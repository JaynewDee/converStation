import React, { useState } from 'react';

// const GetAll: React.FC = () => {

//     const [list, setList] = useState([])


//     const handleClick = async (e) => {
//         e.preventDefault();
//         console.log(e.target)
//             await fetch('/api/engines', {
//             method: 'GET'
//             })
//             .then((result) => result.json())
//             .then((data) => setList(data.data))
//             .catch((err) => console.error(err))

//     }

    

//   return (
//       <>
//     <button onClick={handleClick}>GET ENGINES</button>
//     <div>
//         {list.map(({id, ready, owner}) => 
//             (
                
//                 <a href="https://beta.openai.com/docs/api-reference/engines">{id}</a>
                
//             ))}
//     </div>
//     </>
//   )
// }

// export default GetAll;