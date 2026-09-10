function Closing({ onReachClosing }) {
  return (
    <section className="content-section content-section--closing">
      <div className="container">
        <h2>Closing</h2>
        <p>Placeholder: Pesan penutup.</p>
        <button
          type="button"
          className="btn-close-envelope"
          onClick={onReachClosing}
        >
          Tutup Amplop
        </button>
      </div>
    </section>
  )
}

export default Closing
