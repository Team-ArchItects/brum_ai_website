import Skeleton from "@mui/material/Skeleton";

import { InstaItem } from './InstaFeed';

// interface InstaGridProps = { // !TYPESCRIPT
//     items: [], // An array of InstaItem objects
//   };
  

const gridStyle = { 
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridTemplateRows: 'repeat(3,1fr)',
    rowGap: '2%',
    columnGap: '2%'
  };
  
  const itemStyle = { 
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    aspectRatio: '1/1'
  };
  
  const InstaGrid = ({ items }) => { 

    if (items.length === 0) {
      return (
        <div style={gridStyle}>
          {(new Array(9)).fill(<Skeleton variant='rectangular' sx={itemStyle} />)}
        </div>
      )
    }
  
    return (
      <div style={gridStyle}>
        {items.map(item => (
          <img key={item.mediaUrl} src={item.mediaUrl} style={itemStyle} />
        ))}
      </div>
    );
  };

  export default InstaGrid;
  