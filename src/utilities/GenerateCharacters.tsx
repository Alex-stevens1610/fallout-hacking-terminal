const specialCharacters = [
    '!','@','$','%','^','&','*','(',')','-','_','+','=',
    '[',']','{','}',';',':','"',"'",'|','/','`','?','/',
    '<','>',','
]

const words = [
    'hello', 'world', 'today', 'heart', 'shred', 'bangs'
]

const initialString = Array(12 * 17 * 2).fill(0).map(() => specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
const initialHexCode = Math.floor(Math.random() * 64957 + 170)

type generateCharProps = {
    changeItem: React.Dispatch<React.SetStateAction<string>>,
    changeInfo: React.Dispatch<React.SetStateAction<string[]>>
}
type TerminalColumnProps = {
    changeItem: React.Dispatch<React.SetStateAction<string>>,
    changeInfo: React.Dispatch<React.SetStateAction<string[]>>,
    charString: string,
    index: number,

}

const TerminalColumn = (props: TerminalColumnProps) => {
    return (
        <>
            {
                !((props.index) % 12) && <span style={{marginRight: '30px'}}>{(initialHexCode + props.index).toString(16).toUpperCase()}</span>
            }
            <span 
                        className="terminal-char" 
                        onClick={(e) => {
                            const target = e.target as HTMLSpanElement
                            props.changeInfo((prev) => [target.innerText, ...prev])
                        }} 
                        onMouseOver={(e) => {
                            const target = e.target as HTMLSpanElement
                            props.changeItem(target.innerText)
                        }}
                        >
                    {props.charString}
                </span>
            {
                !((props.index + 1) % 12) && <br />
            }
        </>
    )
}

const GenerateCharacters = (props: generateCharProps) => {

  return (
    <>
        <div className="terminal-col">{
            initialString.slice(0, 17 * 12).map((str, index) => <TerminalColumn changeItem={props.changeItem} changeInfo={props.changeInfo} charString={str} index={index}/>)
            }</div>
        <div className="terminal-col">
            {
            initialString.slice(17 * 12, 17 * 12 * 2).map((str, index) => <TerminalColumn changeItem={props.changeItem} changeInfo={props.changeInfo} charString={str} index={index}/>)
            }</div>
    </>
  )
}

export default GenerateCharacters