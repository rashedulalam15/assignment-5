import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../Type/technology";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";
import { toast } from "react-toastify";

export interface SelectedTechnologiesProps {
   selectedTechnologies : Itechnology[]
   setSelectedTechnologies:Dispatch<SetStateAction<Itechnology[]>>
}

const SelectedTechnologies = ({ setSelectedTechnologies, selectedTechnologies }: SelectedTechnologiesProps) => {
    const handleRemoveAllTechnologies=()=>{
        setSelectedTechnologies([])
         toast.info("All technologies removed from the stack!")
    }
    if(selectedTechnologies.length===0){
        return <div>
            <p className="text-[#94A3B8] text-xs">No technologies selected yet.</p>
             <p className=" text-[#94A3B8] text-xs border border-gray-200 
             py-6 px-8 rounded-md my-2 flex items-center justify-center">Your stack is empty.</p>
        </div>


    }
    return (
        <div>
         <p className="text-[#94A3B8] text-xs"><span>{selectedTechnologies.length} </span>Technology Selected</p>
            {
                selectedTechnologies.map((technology:Itechnology, index:number)=>{
                    return <SelectedTechnologiesCard key={index} technology={technology}
                    selectedTechnologies={selectedTechnologies} 
                    setSelectedTechnologies={setSelectedTechnologies}/>
                })
            }
         <button onClick={()=>handleRemoveAllTechnologies()} className="btn mt-6 w-full
          border border-red-400 text-red-500">Remove All</button>

        </div>
    )
}

export default SelectedTechnologies;