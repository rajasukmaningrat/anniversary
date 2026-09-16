import Tulip from '../Tulip'

function KataKata() {
  return (
    <section className="app-screen screen--kata">
      <div className="screen-kata__tulips" aria-hidden="true">
        <Tulip variant="xs" tilt="left" className="screen-kata__tulip screen-kata__tulip--tl" />
        <Tulip variant="xs" flip tilt="right" className="screen-kata__tulip screen-kata__tulip--br" />
      </div>

      <span className="screen-label">Kata-kata Hari ini</span>

      <div className="screen-kata__card">
        <span className="screen-kata__seal" aria-hidden="true">
          &hearts;
        </span>

        <h2 className="screen-kata__salutation">Untuk Cantikku</h2>

        <p className="screen-kata__text">
          Satu tahun sudah kita lalui bersama. Terima kasih sudah menjadi
          bagian dari ceritaku — untuk setiap chat yang pelan-pelan berbalas,
          setiap tawa yang kita bagi, dan setiap momen kecil yang ingin selalu
          kusimpan.
        </p>

        <p className="screen-kata__text">
          Dari teman sejak kecil sampai jadi orang yang selalu aku pilih,
          kamu lebih dari cukup.
        </p>

        <p className="screen-kata__closing">Happy Anniversary, Cayang. &hearts;</p>
        <p className="screen-kata__sign">— aku, yang sayang kamu</p>
      </div>
    </section>
  )
}

export default KataKata