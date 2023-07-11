import React from "react";
import { TableHead } from "../styles/DashBoardStyle";
import moment from "moment";
export const StudentTable = ({ profile = [], viewProfile = () => {} }) => {
  console.log("profile = ", profile);
  return (
    !!profile.length && (
      <TableHead>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Date of Admission</th>
            <th>Parent Name</th>
          </tr>
        </thead>
        {profile.map((el) => (
          <>
            <tr
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                viewProfile(el);
              }}
            >
              <td>{el.name}</td>
              <td>{el.parent}</td>
              <td>{moment(el.dob).utc().format("DD/MM/YYYY")}</td>
              <td>{moment(el.dateofadmission).utc().format("DD/MM/YYYY")}</td>
            </tr>
          </>
        ))}
      </TableHead>
    )
  );
};
