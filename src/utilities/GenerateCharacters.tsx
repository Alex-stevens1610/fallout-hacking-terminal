import { useEffect } from "react"

const specialCharacters = [
    '!','@','$','%','^','&','*','(',')','-','_','+','=',
    '[',']','{','}',';',':','"',"'",'|','/','`','?','/',
    '<','>',','
]

const words = [
    'hello', 'world', 'today', 'heart', 'shred', 'bangs'
]


type generateCharProps = {
    changeItem: React.Dispatch<React.SetStateAction<string>>,
    changeInfo: React.Dispatch<React.SetStateAction<string[]>>
}

const GenerateCharacters = (props: generateCharProps) => {

  return (
    <div>{
        Array(150).fill(0).map(() => {
            return <span 
                        className="terminal-char" 
                        onClick={(e) => {
                            const target = e.target as HTMLSpanElement
                            props.changeInfo((prev) => [...prev, target.innerText])
                        }} 
                        onMouseOver={(e) => {
                            const target = e.target as HTMLSpanElement
                            props.changeItem(target.innerText)
                        }}
                        >
                {specialCharacters[Math.floor(Math.random() * specialCharacters.length)]}
                </span>
        })
        }</div>
  )
}

export default GenerateCharacters