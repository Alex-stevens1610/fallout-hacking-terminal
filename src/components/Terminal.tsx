import { useState } from "react"
import GenerateCharacters from "../utilities/GenerateCharacters"


const Terminal = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [info, setInfo] = useState<string[]>([''])
  return (
    <div id="terminal" className="center">
    
        <div id="terminal-symbols">
            <GenerateCharacters 
                changeItem={setSelectedItem} 
                changeInfo={setInfo}/>
            </div>
        <div id="terminal-info">
            {
                info.map((info) => {
                    return (
                        <span>{info}</span>
                    )
                })
            }
            <span>{'> '}{selectedItem}</span>
        </div>
    </div>
  )
}

export default Terminal