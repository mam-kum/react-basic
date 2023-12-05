/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from '@mui/material/Button';
import '@fontsource/roboto/700.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Label } from "@mui/icons-material";
import Input from "@mui/material/Input";
const defaultItems = [
  { id: "1", value: "value1" },
  { id: "2", value: "value2" },
  { id: "3", value: "value3" },
  { id: "4", value: "value4" },
];
export function ListUI() {
  const [items, setItems] = useState(defaultItems);
  const addItems = () => {
    const item = defaultItems.find((i) => !items.includes(i));
    if (item) {
      setItems([...items, item]);
    }
  };
  const removeItem = (item: any) => {
    setItems(items.filter((i) => i !== item));
  };
  return (
    <div>
      <Button variant="contained" onClick={addItems}>Add Item</Button>
        {items.map((item) => (
          <List key={item.id}>
            <ListItemButton onClick={() => removeItem(item)}>Remove Item</ListItemButton>
            <Label>{item.id}</Label>
            <Input defaultValue={item.value}></Input>
          </List>          
        ))}
    </div>
  );
}