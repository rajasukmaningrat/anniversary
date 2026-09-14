import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

const STORY = [
  {
    line: 'Awalnya, kita sudah saling mengenal sejak kecil.',
  },
  {
    line: 'Entah sejak kapan, aku mulai punya rasa.',
  },
  {
    line: 'Tapi waktu itu aku terlalu banyak berpikir…',
    note: 'Aku kurang percaya diri, dan sering bertanya-tanya: apakah mungkin seseorang sepertimu menyukai aku.',
  },
  {
    ornament: true,
  },
  {
    line: 'Ketika kamu sedang gap year, aku akhirnya mencoba menghubungimu.',
  },
  {
    line: 'Awalnya cuma soal rekomendasi film.',
    note: 'Aku butuh alasan untuk mulai ngobrol denganmu.',
  },
  {
    line: '17-an membuat kita semakin sering berkomunikasi.',
    note: 'Mulai dari minta bantuanmu bikin banner acara, lama-lama obrolan kita ngalir ke mana-mana.',
  },
  {
    line: 'Pelan-pelan, kita menjadi lebih dekat.',
    note: 'Waktu itu pesanku bisa masuk jam satu siang dan baru dibalas menjelang sore — tapi makin ke sini, makin sering kita cerita.',
  },
  {
    ornament: true,
  },
  {
    line: 'Dan akhirnya ada satu momen ketika aku sadar aku tidak ingin cuma menjadi temanmu. Hubungan kita jadi sulit disebut sekadar teman — ada rasa dari dua sisi, tapi belum ada yang berani menyebutnya.',
    quote: true,
  },
  {
    line: 'Setelah konser yang kita tonton bareng teman-teman, aku akhirnya memberanikan diri.',
    note: 'Lewat chat Instagram, aku sampaikan perasaanku. Dari situlah hubungan kita pelan-pelan menjadi seperti sekarang.',
  },
  {
    ornament: true,
  },
  {
    line: 'Dan ternyata, cerita kita baru benar-benar dimulai.',
    quote: true,
  },
]

function OurStory() {
  return (
    <section className="content-section content-section--story">
      <div className="story-tulips" aria-hidden="true">
        <div className="story-tulips__group story-tulips__group--tr">
          <Tulip variant="xs" flip tilt="right" className="story-tulips__t1" />
        </div>
        <div className="story-tulips__group story-tulips__group--bl">
          <Tulip variant="sm" tilt="left" className="story-tulips__t1" />
          <Tulip variant="xs" flip className="story-tulips__t2" />
        </div>
        <div className="story-tulips__group story-tulips__group--br">
          <Tulip variant="xs" flip tilt="right" className="story-tulips__t1" />
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <h2 className="story-heading">Cerita Kita</h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="story-subtitle">yang tidak pernah sekaligus kuceritakan begini.</p>
        </ScrollReveal>

        <div className="story">
          {STORY.map((part, i) =>
            part.ornament ? (
              <div key={i} className="story__ornament" aria-hidden="true">
                <Tulip variant="xs" />
              </div>
            ) : (
              <ScrollReveal
                key={i}
                className="story__block"
                delay={120 + i * 60}
              >
                <p
                  className={
                    part.quote
                      ? 'story__line story__line--quote'
                      : 'story__line'
                  }
                >
                  {part.line}
                </p>
                {part.note && <p className="story__note">{part.note}</p>}
              </ScrollReveal>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default OurStory