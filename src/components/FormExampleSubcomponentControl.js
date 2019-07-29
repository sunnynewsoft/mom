import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { AppWithRangeAndInPortuguese } from './AppWithRangeAndInPortuguese';


// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Add Task' placeholder='Add Task' />
          <Form.Input fluid label='Add Client' placeholder='Add Client' />
          <AppWithRangeAndInPortuguese/>
          {/* <Form.Select fluid label='Gender' options={options} placeholder='Gender' /> */}
        </Form.Group>
        <Form.Group inline>
          <label>Priority </label>
          <Form.Radio
            label='High'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Low'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl
