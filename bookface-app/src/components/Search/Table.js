
import React from 'react'
import './style.css'
import { css, jsx } from '@emotion/react'
import Box from '@mui/material/Box';
const base = css`
  @media (min-width: 600px) {
    width: 600px;
  }
`
const Table = ({ data }) => {
    return (
        
        <Box sx={{ width: '100%', maxWidth: 500, }}>
      <table >
        <tbody>
          <tr>
            <th></th>
            {/* <th>Surname</th> */}
            <th></th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>          <img
            src={require('../img/' +
            item.profilePicture )}
              className="postProfileImg"
              alt=""
            />
</td>
<td>{item.username}</td>

            </tr>
          ))}
        </tbody>
      </table>
     </Box>

    );
  };
  
  export default Table;