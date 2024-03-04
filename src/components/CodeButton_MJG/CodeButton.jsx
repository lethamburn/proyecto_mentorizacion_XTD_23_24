import { useState } from 'react'
import StyledCodeButton from './StyledCodeButton'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeButton = ({ element, codeString, language = 'html', customStyle, wrapLongLines = true, onToggleShowCode, elementId }) => {
  const [showCode, setShowCode] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const toggleShowCode = () => {
    const newShowCode = !showCode
    setShowCode(newShowCode)
    if (onToggleShowCode) {
      onToggleShowCode(newShowCode)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    }, (err) => {
      console.error('Error al copiar el código: ', err)
    })
  }

  return (
    <div>
      <StyledCodeButton>
        <div className="switch">
          <input
            name={`radio-${elementId}`}
            type="radio"
            value="preview"
            id={`preview-${elementId}`}
            checked={!showCode}
            onChange={toggleShowCode}
          />
          <label htmlFor={`preview-${elementId}`}>Preview</label>

          <input
            name={`radio-${elementId}`}
            type="radio"
            value="html"
            id={`html-${elementId}`}
            checked={showCode}
            onChange={toggleShowCode}
          />
          <label htmlFor={`html-${elementId}`} className="right">Html</label>

          <span className={showCode ? 'right' : ''}></span>
        </div>
      </StyledCodeButton>

      {!showCode
        ? element
        : (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              backgroundColor: 'var(--general90)',
              padding: '5px 10px',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              color: '#FFF',
              whiteSpace: 'nowrap'
            }}>
              <i className={isCopied ? 'fa-solid fa-check' : 'fa-regular fa-clipboard'} onClick={copyToClipboard} style={{ cursor: 'pointer', marginRight: '5px' }}></i>
              <span style={{ cursor: 'pointer', fontSize: '0.8em' }} onClick={copyToClipboard}>{isCopied ? 'Copied!' : 'Copy code'}</span>
            </div>
            <SyntaxHighlighter
              language={language}
              style={atomOneDark}
              customStyle={{ ...customStyle, borderRadius: '0 0 5px 5px', padding: '15px', margin: 0 }}
              wrapLongLines={wrapLongLines}
            >
              {codeString}
            </SyntaxHighlighter>
          </>
          )}
    </div>
  )
}

export default CodeButton
