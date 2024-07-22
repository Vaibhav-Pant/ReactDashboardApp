import styled from "styled-components";
import { useTable, } from 'react-table'
import { useMemo } from "react";

const MainFrame = () => {

  const tableData = [
    {
      id: "HD82NA2H",
      date_time: {
        date: "2023-06-20",
        time: "07:00 AM",
      },
      type: {
        name: "INR Deposit",
        tag: "E-Transfer"
      },
      amount: {
        Amount: "+ ₹81,123.53",
      },
      status: "Pending",
    },
    {
      id: "HD82NA4H",
      date_time: {

        date: "2023-06-18",
        time: "12:16 PM",
      },
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: {
        Amount: "- ₹55,123.10",
      },
      status: "Processing",
    },
    {
      id: "HD82NA5H",
      date_time: {

        date: "2023-06-18",
        time: "03:40 PM",
      },
      type: {
        name: "Buy",
      },
      amount: {
        Amount: "+ 12.0554484 BTC",
        secAmount: "- $81,123.10"
      },
      status: "Cancelled",
    },
    {
      id: "HD82NA6H",
      date_time: {

        date: "2023-06-18",
        time: "09:20 AM",
      },
      type: {
        name: "Sell",
      },
      amount: {
        Amount: "- 2.0554484 BTC",
        secAmount: "+ $19,378.84"
      },
      status: "Completed",
    },
    {
      id: "HD82NA7H",
      date_time: {
        date: "2023-06-20",
        time: "08:24 PM",
      },
      type: {
        name: "BTC Deposit",
      },
      amount: {
        Amount: "+ 15.5000000 BTC",
        secAmount: "+ $37,929.31",
      },
      status: "Pending",
    },
    {
      id: "HD82NA8H",
      date_time: {

        date: "2023-06-18",
        time: "04:47 AM",
      },
      type: {
        name: "BTC Widthdraw",
      },
      amount: {
        Amount: "- 5.05555544 BTC",
        secAmount: "- $62,017.58",
      },
      status: "Completed",
    },
  ];

  const tableColumns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Date & Rime",
      accessor: "date_time",
      Cell: ({ cell: { value } }) => (
        <>
          <div className="tableValue">
            {value.date}
          </div>
          <div className="text">
            {value.time}
          </div>
        </>
      )

    },
    {
      Header: "Type",
      accessor: "type",
      Cell: ({ cell: { value } }) => (
        <>
          <div className="tableValue">
            {value.name}
          </div>
          <div className="text">
            {value.tag ? `${value.tag}` : ''}
          </div>
        </>
      )
    },
    {
      Header: "Amount",
      accessor: "amount",
      Cell: ({ cell: { value } }) => (
        <>
          <div className="tableValue">
            {value.Amount}
          </div>
          <div className="text">
            {value.secAmount ? `${value.secAmount}` : ''}
          </div>
        </>
      )
    },
    {
      Header: "Status",
      accessor: "status",
    }
  ]

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: useMemo(() => tableColumns, []),
      data: useMemo(() => tableData, []),
    })


  return (
    <>
      <Button>
        <button>
          <img src="./images/export.svg" alt="exp" />
          Export CSV
        </button>
      </Button>

      <Table>

        <div className="tagMenu">
          <div>
            <div className="tag">
              <span>All</span>
              <span>349</span>
            </div>
            <div className="tag">
              <span>Deposit</span>
              <span>114</span>
            </div>
            <div className="tag">
              <span>Withdraw</span>
              <span>213</span>
            </div>
            <div className="tag">
              <span>Trade</span>
              <span>22</span>
            </div>
          </div>

          <div className="search">
            <img src="./images/search.svg" alt="search" />
            <input type="text" placeholder="Search by Id or destination" />
          </div>
        </div>


        <div className="table-container">
          <table {...getTableProps()} className="table">
            <thead>
              {
                headerGroups.map((hg) => (
                  <tr {...hg.getHeaderGroupProps()}>
                    {
                      hg.headers.map((header) => (
                        <th {...header.getHeaderProps()}>
                          {
                            header.render("Header")
                          }
                        </th>
                      ))
                    }
                  </tr>
                ))
              }

            </thead>
            <tbody {...getTableBodyProps()}>
              {
                rows.map((row) => {
                  prepareRow(row);

                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} className="tableValue">
                          {
                            cell.render("Cell")
                          }
                        </td>
                      ))}
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </Table>
    </>
  )
}

export default MainFrame;

const Button = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 20px 30px;

  button{
    background-color: rgba(95, 0, 217, 1);
    padding: 10px 20px;
    border: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
`

const Table = styled.div`

  background-color: white;
  border-radius: 10px;
  padding: 30px 30px;
  margin: 20px 30px;
  /* margin: 20px auto; */



  .tagMenu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    color: rgba(121, 126, 130, 1);
  }

  .tagMenu > div:nth-child(1){
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-right: 40px;

  }

  .tag{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
  }
  .tag:hover{
    border-bottom: 1px solid rgba(95, 0, 217, 1);
  }

  .tag > span:nth-child(2){
    background-color: rgba(243, 243, 247, 1);
    border-radius: 100%;
    padding: 2px 5px;
    font-size: 12px;
  }


  .search{
    padding: 5px 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  .search input{
    border: 0;
    padding: 5px;
    background-color: transparent;
  }



  /* Table.css */

  .table-container {
    margin: 20px 0px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow-x: auto; /* Enable horizontal scrolling if needed */
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    min-width: 600px; /* Ensures the table has a minimum width */
  }
  .table th, .table td {
    padding: 12px 15px;
    text-align: left;
  }

  .table th {
    font-size: 14px;
    color: rgba(121, 126, 130, 1);
    font-weight: 500;
  }

  .table td {
    border-bottom: 1px solid rgba(238, 238, 244, 1);
  }


  .tableValue{
    color: black;
    font-weight: 500;
    font-size: 16px;
  }

  .text{
    color: rgba(121, 126, 130, 1);
    font-size: 12px; 
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    .table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }

    .table th, .table td {
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 480px) {
    .table-container {
      margin: 10px;
    }

    .table th, .table td {
      padding: 8px 10px;
    }
  }


`
