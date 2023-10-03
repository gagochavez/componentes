import { TableCell, TableRow, Button } from "@mui/material";
import { Categories } from "../../models/dbModels";
import { blueGrey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface TCRowsProps {
  data: Categories;
  index: number;
  setToEdit: React.Dispatch<React.SetStateAction<null | Categories>>;
  deleteData: (id: number | null | string) => void;
}

export const TableCategoryRows = (props: TCRowsProps) => {
  const { data, index, setToEdit, deleteData } = props;
  return (
    <>
      <TableRow
        hover
        sx={{ backgroundColor: `${index % 2 === 0 && blueGrey[50]}` }}
      >
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.description}</TableCell>
        <TableCell>
          <Button
            onClick={() => setToEdit(data)}
            children="editar"
            variant="outlined"
            color="info"
            endIcon={<EditOutlinedIcon />}
          />
        </TableCell>
        <TableCell>
          <Button
            onClick={() => deleteData(data.id)}
            children="remover"
            variant="outlined"
            color="error"
            endIcon={<DeleteIcon />}
          />
        </TableCell>
      </TableRow>
    </>
  );
};
