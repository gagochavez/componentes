import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableCategoryRows } from "../../../utils/TableCategoryRow/TableCategoryRows";
import { blueGrey } from "@mui/material/colors";

import { Categories } from "../../../models/dbModels";
import { Loader } from "../../../utils/Loader";

interface TableCategoryProps {
  dataDb: Categories[] | null;
  setToEdit: React.Dispatch<React.SetStateAction<null | Categories>>;
  deleteData: (id: number | null | string) => void;
}

export const TableCategory = (props: TableCategoryProps) => {
  const { dataDb, setToEdit, deleteData } = props;

  return (
    <Paper sx={{ border: `1px solid ${blueGrey[300]}`, margin: "1rem" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: blueGrey[200] }}>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripccion</TableCell>
            <TableCell width={1} align="center">
              Editar
            </TableCell>
            <TableCell width={1} align="center">
              Remover
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataDb ? (
            dataDb?.length > 0 ? (
              dataDb?.map((data, index) => (
                <TableCategoryRows
                  key={index}
                  data={data}
                  index={index}
                  setToEdit={setToEdit}
                  deleteData={deleteData}
                />
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  No Content
                </TableCell>
              </TableRow>
            )
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <Loader />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};
