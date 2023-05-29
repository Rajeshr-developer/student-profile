import React from "react";
import { TableHead } from "../styles/DashBoardStyle";
export const StudentTable = ({ profile = [], viewProfile = () => {} }) => {
  return (
    !!profile.length && (
      <TableHead>
        {profile.map((el) => (
          <>
            <br></br>
            <tr
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                viewProfile(el);
              }}
            >
              <td>{el.name}</td>
            </tr>
          </>
        ))}
      </TableHead>
    )
  );
};
