import { useState } from 'react'
import StyledCodeButton, { CodeContainer, CopyButton, SyntaxStyle } from './StyledCodeButton'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeButton = ({ selected, onChange, codeToShow }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeToShow).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    }, (err) => {
      console.error('Error al copiar el código: ', err)
    })
  }

  return (
    <StyledCodeButton>
      <div className="switch">
        <input
          name="radio"
          type="radio"
          value="optionone"
          id="optionone"
          checked={selected === 'optionone'}
          onChange={() => onChange('optionone')}
        />
        <label htmlFor="optionone">Preview</label>

        <input
          name="radio"
          type="radio"
          value="optiontwo"
          id="optiontwo"
          checked={selected === 'optiontwo'}
          onChange={() => onChange('optiontwo')}
        />
        <label htmlFor="optiontwo" className="right">HTML</label>

        <span className={selected === 'optiontwo' ? 'right' : ''}></span>
      </div>
      {selected === 'optiontwo' && (
        <CodeContainer>
          <CopyButton onClick={copyToClipboard}>
            <i className={isCopied ? 'fas fa-check' : 'far fa-clipboard'} style={{ marginRight: '5px' }}></i>
            {isCopied ? 'Copied!' : 'Copy code'}
          </CopyButton>
          <SyntaxHighlighter language="jsx" style={{ ...atomOneDark, ...SyntaxStyle }}>
            {codeToShow}
          </SyntaxHighlighter>
        </CodeContainer>
      )}
    </StyledCodeButton>
  )
}

export default CodeButton
