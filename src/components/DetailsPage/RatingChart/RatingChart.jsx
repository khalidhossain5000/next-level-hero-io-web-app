// import React from "react";
// import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

// const RatingChart = ({ ratings }) => {
//   return (
//     <BarChart
//       layout="vertical"
//       style={{
//         width: "100%",

//         height: "400px",
    
//       }}
//       responsive
//       data={ratings}
//       margin={{ bottom: 20 }}
//     >
//       <Tooltip wrapperStyle={{ width: 150 }} />
//       <Legend
//         width={100}
//         wrapperStyle={{
//           left: 900,

//           backgroundColor: "#f5f5f5",
//           border: "1px solid #d5d5d5",
//           borderRadius: 3,
//           lineHeight: "40px",
//         }}
//       />

//       <XAxis dataKey="count" type="number" stroke="#99a1af"  label={{ position: 'insideBottomRight', value: 'Rating Count', offset:5 }}/>
//       <YAxis dataKey="name" type="category" />
//       <Bar dataKey="count" fill="#ff8811" barSize={30} />
//     </BarChart>
//   );
// };

// export default RatingChart;











import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratings }) => {
  // Reverse the data so 5 star is at the top
  const reversedData = [...ratings].reverse();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={reversedData}
        margin={{ left: 0, right: 0, bottom: 0, top: 0 }}
      >
        
        <XAxis 
          type="number" 
          stroke="#99a1af" 
          tick={{ fontSize: 12 }}
        /> 
        
        <YAxis 
          dataKey="name" 
          type="category" 
   scale="band" 
            padding={{ top: 0, bottom: 0 }}
          stroke="#99a1af"
          interval={0} 
        />
        
       
        <Tooltip cursor={false} />
        
        <Legend 
            verticalAlign="bottom" 
            align="right"
            wrapperStyle={{ paddingBottom: "20px" }}
        />

        <Bar 
          dataKey="count" 
          fill="#ff8811" 
          barSize={25} 
          radius={[0, 4, 4, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;