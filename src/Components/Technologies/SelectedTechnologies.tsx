import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../Type/technology";
import { MdCancel } from "react-icons/md";

export interface SelectedTechnologiesProps {
   selectedTechnologies : Itechnology[]
   setSelectedTechnologies:Dispatch<SetStateAction<Itechnology[]>>
}

const SelectedTechnologies = ({ setSelectedTechnologies, selectedTechnologies }: SelectedTechnologiesProps) => {
    if(selectedTechnologies.length===0){
        return <div>
            <p className="text-[#94A3B8] text-xs">No technologies selected yet.</p>
             <p className=" text-[#94A3B8] text-xs border border-gray-200 
             py-6 px-8 rounded-md my-2 flex items-center justify-center">Your stack is empty.</p>
        </div>


    }
    return (
        <div>
         <p className="text-[#94A3B8] text-xs"><span></span>Technology Selected</p>
            {
                selectedTechnologies.map((technology:Itechnology, index:number)=>{
                    return <div className="grid grid-cols-1 my-2">
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