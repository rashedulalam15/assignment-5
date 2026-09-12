import { FaCheck, FaRegStar } from "react-icons/fa";
import type { Itechnology } from "../../Type/technology";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

export interface TechnologyCardProps {
    technology: Itechnology
    selectedTechnologies:Itechnology[]
    setSelectedTechnologies:Dispatch<SetStateAction<Itechnology[]>>
}
const TechnologyCard = ({ technology, selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) => {
    const [isSelected, setIsSelected] = useState(false)
    useEffect(()=>{
        const isExist = selectedTechnologies.some(selectedTechnologie=>selectedTechnologie.id === technology.id)
        setIsSelected(isExist)
    },[selectedTechnologies,technology.id])
    const handleAddToStack =()=>{
     setIsSelected(true)
        
     setSelectedTechnologies([...selectedTechnologies,technology])
     toast.success(`${technology.name} added to stack!`)
    }
    
    return (
        <div className={`card bg-base-100 p-2 space-y-4 shadow-sm 
            ${isSelected ? "border-2 border-pink-200" : ""}`}>
    <div className="flex justify-between">
    <img src={technology.icon} className="h-[30px] w-[30px]" alt="" />
    <span className="rounded-full flex items-center  text-sm bg-[#F1F5F9] px-2">{technology.badge}</span>
    </div>
    <h2 className="card-title ">{technology.name}</h2>
    <p className="text-xs text-[#64748B]">{technology.description}</p>
    <div className="flex justify-between text-xs ">
        <span className="rounded-md bg-[#F1F5F9] px-1 text-[#64748B]">{technology.category}</span>
        <span className="text-[#64748B]">{technology.difficulty}</span>
        <span className="flex items-center gap-1"><FaRegStar />{technology.rating}</span>
    </div>
    
      <button onClick={()=>handleAddToStack()} className={`btn w-full  rounded-xl
        ${isSelected? "bg-pink-200 text-pink-500":"bg-[#0A0F1D] text-white"}`
      }
        disabled={isSelected}>
        {isSelected===true?<><FaCheck /> Added to Stack</>:"Add to Stack"}</button>

  </div>

    )
}

export default TechnologyCard;