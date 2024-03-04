import styled from 'styled-components'

const StyledCodeButton = styled.div`
  .switch {
    background-color: var(--general50);
    width: 100px;
    height: 20px;
    border-radius: 5px;
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

export default StyledCodeButton
