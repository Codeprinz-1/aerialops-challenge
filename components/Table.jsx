import { Table } from "@mantine/core/";
import { createRef } from "react";
import ArrayValue from "./ArrayValue";

export const table = createRef();

const usersData = [
  ["Name", "Occupation", "City", "Documents"],
  [
    "Prince",
    "Software Engineer",
    "Lagos",
    [
      "Contract.docx",
      "Identity.docx",
      "Non_disclosure_agreement.pdf",
      "Employment.pdf",
    ],
  ],
  [
    "Michael",
    "Senior Data Scientist/Entrepreneur",
    "Seattle",
    ["Product.pdf", "Prince_contract.pdf", "MVP.pdf", "Users.xlxs"],
  ],
  [
    "Abigail",
    "Investor",
    "Hong Kong",
    [
      "Memo2.pdf",
      "Non_disclosure_agreement.pdf",
      "Games.pdf",
      "Investments.docx",
      "Clients.csv",
    ],
  ],
];

export default () => (
  <Table ref={table}>
    <thead>
      <tr>
        {usersData[0].map((field, i) => (
          <th key={i}>{field}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {usersData.slice(1).map((user, i) => (
        <tr className="content-row" key={i}>
          {user.map((innerData, i) =>
            Array.isArray(innerData) ? (
              <ArrayValue key={i} data={innerData} field={usersData[0][i]} />
            ) : (
              <td key={i}> {innerData} </td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </Table>
);
