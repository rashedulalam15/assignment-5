import { use, useState } from "react";
import type { Itechnology } from "../../Type/technology";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";

export interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    const [selectedTechnologies,setSelectedTechnologies] = useState<Itechnology[]>([])
    // console.log(technologies)
    return (
        <div className="container mx-auto space-y-4">
            <h2 className="font-bold text-4xl">Explore the <span className="bg-gradient-to-r from-[#EC4899] via-[#B354D0] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
           
            
           <div className="grid grid-cols-12 gap-4 mt-12">
             {/* technologies card 70% */}
              <div className="grid grid-cols-3 gap-4 col-span-9">
                 {
                    technologies.map((technology:Itechnology, index:number)=>{
                        return <TechnologyCard selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies} key={index} technology={technology} />
                    })
                 }
              </div>
              {/* selectedTechnologies 30% */}
              <div className=" col-span-3">
              <SelectedTechnologies selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies} />
              </div>
           </div>
        </div>
    )
}

export default Technologies;