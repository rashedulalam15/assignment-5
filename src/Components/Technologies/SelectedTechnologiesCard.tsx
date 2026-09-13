import { MdCancel } from "react-icons/md";
import type { Itechnology } from "../../Type/technology";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export interface SelectedTechnologiesCardProps {
    technology: Itechnology
    selectedTechnologies: Itechnology[]
    setSelectedTechnologies:Dispatch<SetStateAction<Itechnology[]>>
}

const SelectedTechnologiesCard = ({ technology, selectedTechnologies,setSelectedTechnologies }: SelectedTechnologiesCardProps) => {
    const handleDeleteTechnologies =(technology:Itechnology)=>{
            const restTechnologies= selectedTechnologies.filter(selectedTechnology=>selectedTechnology.id !== technology.id)
            setSelectedTechnologies(restTechnologies)
            toast.info(`${technology.name} removed from the stack!`)
    }
    return (
        <div className="grid grid-cols-1 my-2">
                        <div className="flex justify-between items-center border rounded-md p-2 border-gray-300">
                        <div className="flex items-center gap-2">
                        <img src={technology.icon} className="h-[30px] w-[30px]" alt="" />
                         <div>
                            <h2 className="text-sm font-semibold">{technology.name}</h2>
                            <p className="text-xs text-[#94A3B8]">{technology.category}</p>
                         </div>
                        </div>
                        <button className="cursor-pointer" onClick={()=>handleDeleteTechnologies(technology)}><MdCancel /></button>
                    </div>
                    </div>

    )
}

export default SelectedTechnologiesCard;