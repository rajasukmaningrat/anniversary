function EnvelopeView({ onOpen }) {
  return (
    <div className="view view--envelope">
      <div className="container">
        <h1>Happy Anniversary</h1>
        <p>1 Tahun Bersama</p>
        <button
          type="button"
          className="btn-open-envelope"
          onClick={onOpen}
        >
          Buka Amplop
        </button>
      </div>
    </div>
  )
}

export default EnvelopeView
