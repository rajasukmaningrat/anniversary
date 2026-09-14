import Closing from './sections/Closing'

function ClosingView({ onReopen }) {
  return (
    <div className="view view--closing">
      <Closing onReopen={onReopen} />
    </div>
  )
}

export default ClosingView