import ColorButton from './colorButton'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<ColorButton/>).toJSON()
  expect(tree).toMatchSnapshot()
})
