import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../Type/technology";
import { MdCancel } from "react-icons/md";

export interface SelectedTechnologiesProps {
   selectedTechnologies : Itechnology[]
   setSelectedTechnologies:Dispatch<SetStateAction<Itechnology[]>>
}

const SelectedTechnologies = ({ setSelectedTechnologies, selectedTechnologies }: SelectedTechnologiesProps) => {
    
    return (
        <div>
            {
                selectedTechnologies.map((technology:Itechnology, index:number)=>{
                    return <div className="grid grid-cols-1 bg-base-100 shadow-sm p-2">
                        <div className="flex justify-between items-center border rounded-md p-2 border-gray-300">
                        <div className="flex items-center gap-2">
                        <img src={technology.icon} className="h-[30px] w-[30px]" alt="" />
                         <div>
                            <h2 className="text-sm font-semibold">{technology.name}</h2>
                            <p className="text-xs text-[#94A3B8]">{technology.category}</p>
                         </div>
                        </div>
                        <button><MdCancel /></button>
                    </div>
                    </div>
                })
            }
        </div>
    )
}

export default SelectedTechnologies;