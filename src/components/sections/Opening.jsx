import Tulip from '../Tulip'

function Opening() {
  return (
    <section className="content-section content-section--opening">
      <div className="section-tulips" aria-hidden="true">
        <Tulip variant="sm" tilt="left" className="section-tulips__left" />
        <Tulip variant="sm" flip className="section-tulips__right" />
      </div>
      <div className="container">
        <h2>Opening</h2>
        <p>Placeholder: Pesan pembuka untuk anniversary.</p>
      </div>
    </section>
  )
}

export default Opening
