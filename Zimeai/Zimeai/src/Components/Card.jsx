// import React, { useState } from 'react';

// import { Table } from "antd";

// //  { id, title, body, tags, data, setData, key }

// export default function Card({ dataSource }) {

//     const [value, setValue] = useState("")
//     const [columns, setColumns] = useState({
//         title: "ID",
//         dataIndex:"id"
//     },{
//         title:dataSource.title,
//         dataIndex
//     })

//     // filtering function for according to the tags provide
//     const handleTagClick = (tag) => {
//         const filterData = data.filter((item) => item.tags.includes(tag));
//         setData(filterData)

//     }

//     // const columns = [
//     //     {
//     //         title: 'Sr.no',
//     //         dataIndex: 'name',
//     //         key: 'name',
//     //     },
//     //     {
//     //         title: 'Title',
//     //         dataIndex: 'age',
//     //         key: 'age',
//     //     },
//     //     {
//     //         title: 'Body',
//     //         dataIndex: 'address',
//     //         key: 'address',
//     //     },
//     //     {
//     //         title: 'tags',
//     //         dataIndex: 'address',
//     //         key: 'address',
//     //     },
//     // ];






//     return (
//         <div >
//             {/* <table border="" >
//                 <thead>
//                     <tr>
//                         <th>Sr. No.</th>
//                         <th>Title</th>
//                         <th>Body</th>
//                         <th>Tags</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr key={key}>
//                         <td>{id}</td>
//                         <td>{title}</td>
//                         <td>{body}</td>

//                         <td>{
//                             tags.map((item, i) => {
//                                 return <div>
//                                     <p>{item}</p>
//                                 </div>
//                             })
//                         }</td>

//                     </tr>
//                 </tbody>
//             </table> */}

//             {/* Ant design */}

//             <Table dataSource={dataSource} columns={columns} />;



//         </div>
//     );
// }
