function ClosingView({ onReopen }) {
  return (
    <div className="view view--closing">
      <div className="container">
        <h1>Selamat Anniversary</h1>
        <p>Terima kasih sudah menjadi bagian dari cerita ini.</p>
        <button
          type="button"
          className="btn-reopen-envelope"
          onClick={onReopen}
        >
          Buka Kembali
        </button>
      </div>
    </div>
  )
}

export default ClosingView
