import { useState } from "react"
import GenerateCharacters from "../utilities/GenerateCharacters"


const Terminal = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [info, setInfo] = useState<string[]>([''])
  return (
    <div id="terminal" className="center">

        <div id="terminal-header">
            <span>This is where the header goes</span>
        </div>
    
        <div id="terminal-symbols">
            <GenerateCharacters 
                changeItem={setSelectedItem} 
                changeInfo={setInfo}/>
            </div>
        <div id="terminal-info">
            <span>{'> '}{selectedItem}</span>
            {
                info.slice(0, 16).map((info) => {
                    return (
                        <span>{info}</span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Terminal