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
          Alhamdulillah, nggak kerasa udah satu tahun aja.
          Kalau dipikir-pikir, awalnya kita juga nggak langsung sedekat ini. Aku yang awalnya coba cari cara buat deketin kamu, mulai dari nyarik hal-hal kecil nyarik topik, sampai akhirnya kita punya banyak cerita sendiri.
          Selama satu tahun ini banyak banget yang udah kita lewatin. Ada momen yang seru, ada yang biasa aja,ada juga yang kerjaanya nagis aja hahahaahah🤭, ada juga yang sempat bikin kita kesel satu sama lain. Tapi ya, namanya juga jalan bareng nyakkk wkwkwkkwkw, pasti ada aja ceritanya.
          alhamdulilah kita bisa sampai di sini yak. Bersyukur juga bisa kenal kamu lebih jauh, bukan cuma sebagai pacar, tapi sebagai orang yang ternyata bisa jadi teman ngobrol, tempat cerita, bahkan kadang kayak kakak sendiri yang sabar ngadepin aku 💗🫶🏻🫂.
          Alhamdulillahi jazakillahu khoior yaa cintaa buat momen momen di 1 tahun ini yaaa
          Makasih ya udah sabar sama aku selama ini. Aku tahu aku masih banyak kurangnya dan kadang mungkin bikin kamu kesel juga.
          Untuk kamu, semangat terus ya. Jangan terlalu dipikirin semuanya sendirian. Kalau lagi capek, istirahat aja. Kalau ada yang lagi dikejar, jalanin pelan-pelan. Nggak harus semuanya langsung beres.
          Aku cuma berharap ke depannya kita masih bisa ngobrol dengan nyaman, masih bisa ketawa bareng, dan kalau ada masalah bisa dibicarain baik-baik.
          Kita bisa menjadi le bih baik dan selalu saling suport satu sama lain dan juga semua yang kamu doakan yang kita doakan dan semunya bisa tercapai dan aku ingin kamu jadi yang sekarang dan setrusnya di dunia dan akhirat🫶🏻.
          Happy 1st Anniversary 🤍
          Semoga masih banyak cerita random yang bisa kita lewatin bareng.
        </p>

        <p className="screen-kata__text">
          Dari seseorang yang tidak pernah aku sangka  sampai jadi orang yang selalu aku pilih,
          kamu lebih dari cukup.
          AYAYUUUUU CANTIKKK 🤍
        </p>

        <p className="screen-kata__closing">Happy Anniversary, Cayang. &hearts;</p>
        <p className="screen-kata__sign">— aku, yang sayang kamu</p>
      </div>
    </section>
  )
}

export default KataKata