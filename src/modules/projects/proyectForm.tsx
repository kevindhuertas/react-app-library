import React, { useState } from "react";
import { Button, Dialog, Chip } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { MdOutlineClose } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import { Project } from "../../models/Projects";
import { addProyect } from "../../features/proyect/proyectSlice";


const initialFormState: Project = {
  id: uuid(),
  creatorUser: uuid(),
  title: "",
  description: "",
  members: [],
  favorite: false,
};

function ProjectForm() {
  const dispatch = useDispatch();
  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // Form
  const [projectForm, setProjectForm] = useState<Project>({
    ...initialFormState
  });

  const handleChange = (e) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value, //[title]: "value"
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(
        addProyect({ ...projectForm,})
      );
      setProjectForm({
        ...initialFormState
      });
  };

  return (
    <>
      <HiPlusCircle onClick={handleOpen} className=" ml-2 inline text-gray-400/80 hover:text-gray-700" size={25}/>
      <Dialog size={"xl"} open={open} handler={handleOpen} className="rounded-2xl">
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center text-primary-900">
            <span className="sub-title py-2">Crear un nuevo proyecto</span>
   
            <MdOutlineClose   onClick={handleOpen} className=""/>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex gap-1 flex-col flex-auto "
          >
            <input
              name="title"
              className=" rounded-md p-1"
              onChange={handleChange}
              type="text"
              placeholder="Nombre del Proyecto"
            />
            <textarea
              name="description"
              className=" rounded-md p-1"
              placeholder="descripción"
              onChange={handleChange}
            ></textarea>

            <div className="flex">
              <Button
                type="submit"
                onClick={handleOpen}
                className=" bg-primary"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
}

export default ProjectForm;
