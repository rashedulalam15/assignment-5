import { FaRegStar } from "react-icons/fa";
import type { Itechnology } from "../../Type/technology";
import { useState, type Dispatch, type SetStateAction } from "react";

export interface TechnologyCardProps {
    technology: Itechnology
    selectedTechnologies:Itechnology[]
    setSelectedTechnologies:Dispatch<SetStateAction<Itechnology[]>>
}
const TechnologyCard = ({ technology, selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleAddToStack =()=>{
     setIsSelected(true)
        
     setSelectedTechnologies([...selectedTechnologies,technology])
    }
    return (
        <div className="card bg-base-100 p-2 space-y-4 shadow-sm">
    <div className="flex justify-between">
    <img src={technology.icon} className="h-[30px] w-[30px]" alt="" />
    <span className="rounded-full text-sm bg-[#F1F5F9] px-1">{technology.badge}</span>
    </div>
    <h2 className="card-title ">{technology.name}</h2>
    <p className="text-xs text-[#64748B]">{technology.description}</p>
    <div className="flex justify-between text-xs ">
        <span className="rounded-md bg-[#F1F5F9] px-1 text-[#64748B]">{technology.category}</span>
        <span className="text-[#64748B]">{technology.difficulty}</span>
        <span className="flex items-center gap-1"><FaRegStar />{technology.rating}</span>
    </div>
    
      <button onClick={()=>handleAddToStack()} className="btn w-full bg-[#0A0F1D] text-white rounded-xl"
        disabled={isSelected}>
        {isSelected===true?"Added to Stack":"Add to Stack"}</button>

  </div>

    )
}

export default TechnologyCard;