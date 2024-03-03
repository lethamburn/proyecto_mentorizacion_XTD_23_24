import { useState } from 'react'
import CodeButton from './CodeButton'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Viewer = () => {
  const [selectedOption, setSelectedOption] = useState('optionone')
  const [isCopied, setIsCopied] = useState(false)

  const handleChange = (option) => {
    setSelectedOption(option)
  }

  const codeString = `
<style>
.switch {
  background-color: var(--general50);
  width: 100px;
  height: 20px;
  border-radius: 5px;
  padding: 1px;
  display: inline-block;
  position: relative;
}

.switch label {
  float: left;
  width: 50%;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
  text-transform: uppercase;
  font-size: 10px;
}

.switch input[type="radio"] {
  display: none;
}

.switch input[type="radio"]:checked + label {
  font-weight: bold;
}

.switch span {
  position: absolute;
  z-index: 1;
  top: 1px;
  left: 1px;
  width: calc(50% - 2px);
  height: calc(100% - 2px);
  background-color: white;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.switch span.right {
  left: calc(50% + 1px);
}
</style>

<div class="switch">
  <input name="radio" type="radio" value="optionone" id="optionone">
  <label for="optionone">Preview</label>

  <input name="radio" type="radio" value="optiontwo" id="optiontwo" checked>
  <label for="optiontwo" class="right">html</label>

  <span aria-hidden="true" class="right"></span>
</div>
  `.trim()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    }, (err) => {
      console.error('Error al copiar el código: ', err)
    })
  }

  return (
    <>
      <CodeButton selected={selectedOption} onChange={handleChange} />

      {selectedOption === 'optiontwo' && (
        <div style={{ position: 'relative', borderRadius: '5px', overflow: 'hidden', border: '1px solid #ccc', marginTop: '10px' }}>
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
            language="html"
            style={atomOneDark}
            customStyle={{ borderRadius: '0 0 5px 5px', padding: '15px', margin: 0 }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      )}
    </>
  )
}

export default Viewer
