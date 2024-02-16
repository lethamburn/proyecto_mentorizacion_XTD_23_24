import styled from 'styled-components'
import Button from './Button'

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 5px;
  padding: 5px;
`

const SectionTitle = styled.h2`
  width: 100%;
  color: var(--general100);
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
`

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const GroupTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--general60);
  margin-bottom: 15px;
`

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const ButtonViewer = () => {
  return (
    <ButtonsContainer>
      <SectionTitle>Large</SectionTitle>
      <ButtonsGroup>
        <GroupTitle>Primary</GroupTitle>
        <ButtonsRow>
          <Button width="99px" height="48px">Button</Button>
          <Button width="119px" height="48px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button iconOnly width="48px" height="48px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Destructive</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" width="99px" height="48px">Button</Button>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" width="119px" height="48px">
            <i className="fas fa-trash icon-trash"></i>
            Button
          </Button>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" iconOnly width="48px" height="48px">
            <i className="fas fa-trash icon-trash"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>White</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--white)" textColor="var(--primary100)"
          hoverColor="var(--primary100)" hoverTextColor="var(--white)"
          borderColor="var(--general50)" width="99px" height="48px">
            Button
          </Button>
          <Button
          bgColor="var(--white)" textColor="var(--primary100)"
          hoverColor="var(--primary100)" hoverTextColor="var(--white)"
          borderColor="var(--general50)" width="119px" height="48px">
          <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button
          bgColor="var(--white)" textColor="var(--primary100)"
          hoverColor="var(--primary100)" hoverTextColor="var(--white)"
          borderColor="var(--general50)" iconOnly width="48px" height="48px">
          <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Secondary</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" width="99px" height="48px">Button</Button>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" width="119px" height="48px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" iconOnly width="48px" height="48px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Destructive Secondary</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" width="99px" height="48px">Button</Button>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" width="119px" height="48px">
            <i className="fas fa-trash icon-trash"></i>
            Button
          </Button>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" iconOnly width="48px" height="48px">
            <i className="fas fa-trash icon-trash"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <SectionTitle>Medium</SectionTitle>
      <ButtonsGroup>
        <GroupTitle>Primary</GroupTitle>
        <ButtonsRow>
          <Button width="99px" height="40px">Button</Button>
          <Button width="119px" height="40px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button iconOnly width="40px" height="40px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Destructive</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" width="99px" height="40px">Button</Button>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" width="119px" height="40px">
            <i className="fas fa-trash icon-trash"></i>
            Button
          </Button>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" iconOnly width="40px" height="40px">
            <i className="fas fa-trash icon-trash"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>White</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--white)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" borderColor="var(--general50)" width="99px" height="40px">Button</Button>
          <Button bgColor="var(--white)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" borderColor="var(--general50)" width="119px" height="40px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button bgColor="var(--white)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" borderColor="var(--general50)" iconOnly width="40px" height="40px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Secondary</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" width="99px" height="40px">Button</Button>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" width="119px" height="40px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" iconOnly width="40px" height="40px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Destructive Secondary</GroupTitle>
        <ButtonsRow>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" width="99px" height="40px">Button</Button>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" width="119px" height="40px">
            <i className="fas fa-trash icon-trash"></i>
            Button
          </Button>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" iconOnly width="40px" height="40px">
            <i className="fas fa-trash icon-trash"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <SectionTitle>Small</SectionTitle>
      <ButtonsGroup>
        <GroupTitle>Primary</GroupTitle>
        <ButtonsRow>
          <Button textSize="14px" width="84px" height="36px">Button</Button>
          <Button textSize="14px" width="104px" height="36px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button iconOnly width="36px" height="36px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Destructive</GroupTitle>
        <ButtonsRow>
          <Button textSize="14px" bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" width="84px" height="36px">Button</Button>
          <Button textSize="14px" bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" width="104px" height="36px">
            <i className="fas fa-trash icon-trash"></i>
            Button
          </Button>
          <Button bgColor="var(--red100)" hoverColor="var(--red30)" hoverTextColor="var(--red100)" iconOnly width="36px" height="36px">
            <i className="fas fa-trash icon-trash"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>White</GroupTitle>
        <ButtonsRow>
          <Button textSize="14px" bgColor="var(--white)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" borderColor="var(--general50)" width="84px" height="36px">Button</Button>
          <Button textSize="14px" bgColor="var(--white)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" borderColor="var(--general50)" width="104px" height="36px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button bgColor="var(--white)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" borderColor="var(--general50)" iconOnly width="36px" height="36px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Secondary</GroupTitle>
        <ButtonsRow>
          <Button textSize="14px" bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" width="84px" height="36px">Button</Button>
          <Button textSize="14px" bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" width="104px" height="36px">
            <i className="fas fa-check icon-check"></i>
            Button
          </Button>
          <Button bgColor="var(--primary40)" textColor="var(--primary100)" hoverColor="var(--primary100)" hoverTextColor="var(--white)" iconOnly width="36px" height="36px">
            <i className="fas fa-cog icon-cog"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
      <ButtonsGroup>
        <GroupTitle>Destructive Secondary</GroupTitle>
        <ButtonsRow>
          <Button textSize="14px" bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" width="84px" height="36px">Button</Button>
          <Button textSize="14px" bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" width="104px" height="36px">
            <i className="fas fa-trash icon-trash"></i>
            Button
          </Button>
          <Button bgColor="var(--red30)" textColor="var(--red100)" hoverColor="var(--red100)" hoverTextColor="var(--white)" iconOnly width="36px" height="36px">
            <i className="fas fa-trash icon-trash"></i>
          </Button>
        </ButtonsRow>
      </ButtonsGroup>
    </ButtonsContainer>
  )
}

export default ButtonViewer
