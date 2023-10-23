import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function Mobile_modal({handleDelete ,item,handleStatus}) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="" className="mt-[11rem]">
        Actions
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Actions</DialogHeader>
       
        <DialogFooter className="flex gap-4 ">
          <Button
            variant="text"
            color="red"
            onClick={()=>(handleDelete(item.id),
                handleOpen() )}
            className="mr-1"
          >
            <span>Delete</span>

          </Button>
       {item.status==="planToWatch" &&     <Button variant="gradient" color="blue"  onClick={()=>(handleStatus(item),
                handleOpen() )}>
            <span>Mark as Watched</span>
          </Button>}
          {item.status==="watched" && <Button variant="gradient" color="green" onClick={()=>(handleStatus(item),
                handleOpen() )}>
            <span>Add to Favorite</span>
          </Button>}
        </DialogFooter>
      </Dialog>
    </>
  );
}