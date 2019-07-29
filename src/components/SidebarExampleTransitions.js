import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SideNav from './SideNavs'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

// const HorizontalSidebar = ({ animation, direction, visible }) => (
//   <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
//     <Grid textAlign='center'>
//       <Grid.Row columns={1}>
//         <Grid.Column>
//           <Header as='h3'>New Content Awaits</Header>
//         </Grid.Column>
//       </Grid.Row>
//       <Grid columns={3} divided>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//       </Grid>
//     </Grid>
//   </Sidebar>
// )

// HorizontalSidebar.propTypes = {
//   animation: PropTypes.string,
//   direction: PropTypes.string,
//   visible: PropTypes.bool,
// }

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar 
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Task Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='user' />
      Current Client
    </Menu.Item>
    <Menu.Item  href="#issues" as='a'>
      <Icon name='time' />
      Issues
    </Menu.Item>
    <Menu.Item  href="#issues2" as='a'>
      <Icon name='help' />
      help
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }))

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>

        <Sidebar.Pushable as={Segment} style={{minHeight: '70vh', display: 'flex', flexFlow: 'column nowrap'}}>
          {/* {vertical ? (
            <HorizontalSidebar animation={animation} direction={direction} visible={visible} />
          ) : null} */}
          {vertical ? null : (
            <VerticalSidebar animation={animation} direction={direction} visible={visible} />
          )}
{/* 
          <Sidebar.Pusher  dimmed={dimmed && visible}>
            <Segment basic>
              <Header as='h3' disabled={vertical} onClick={this.handleAnimationChange('slide out')}>Application Content</Header>
              {/* <Image disabled={vertical} onClick={this.handleAnimationChange('slide out')} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
              {/* <TableExampleStructured />
             <p class="issues"> this is test</p>
             <p class="issues2"> this is test2</p> */}
             <SideNav/>
            {/* </Segment> */}
          {/* </Sidebar.Pusher>  */}
        </Sidebar.Pushable>
      </div>
    )
  }
}
