import React from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export default function Pagination({setPagination}) {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
   
    onClick: () => {setActive(index);
    setPagination(index)  },
    
  });
 
  const next = () => {
    if (active === 4) return;
 
    setActive(active + 1);
    setPagination(active+1);
  };
 
  const prev = () => {
    if (active === 1) return;
 setPagination(active-1);
    setActive(active - 1);
  };
 
  return (
   <div className="grid justify-items-center">
        <ButtonGroup variant="filled">
          <IconButton onClick={prev}>
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton onClick={next}>
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </ButtonGroup>
   </div>
  );
}