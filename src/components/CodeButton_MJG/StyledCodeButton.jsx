import styled from 'styled-components'

const StyledCodeButton = styled.div`
  .switch {
    background-color: var(--general50);
    width: 100px;
    height: 20px;
    border-radius: 5px;
    padding: 1px;
    display: inline-block;
    position: relative;
  }

  label {
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

  input[type="radio"] {
    display: none;

    &:checked + label {
      font-weight: bold;
    }
  }

  span {
    position: absolute;
    z-index: 1;
    top: 1px;
    left: 1px;
    width: calc(50% - 2px);
    height: calc(100% - 2px);
    background-color: white;
    border-radius: 4px;
    transition: all 0.3s ease;

    &.right {
      left: calc(50% + 1px);
    }
  }
`

export const CodeContainer = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ccc;
  margin-top: 10px;
`

export const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--general90);
  padding: 5px 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #FFF;
  font-size: 0.8em;
  white-space: nowrap;
  cursor: pointer;

  i {
    font-size: 1.25em;
  }
`

export const SyntaxStyle = {
  borderRadius: '0 0 5px 5px',
  padding: '15px',
  margin: 0
}

export default StyledCodeButton
