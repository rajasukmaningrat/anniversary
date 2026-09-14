import Tulip from './Tulip'
import {
  Opening,
  AboutHer,
  PhotoGalleryAyu,
  OurStory,
  PhotoGalleryTogether,
  ThankYou,
  FinalMemoryGallery,
  Closing,
} from './sections'

function ContentView({ onReopen }) {
  return (
    <div className="view view--content">
      <div className="content-tulips" aria-hidden="true">
        <Tulip variant="xs" tilt="right" className="content-tulips__tl" />
        <Tulip variant="xs" flip className="content-tulips__tr" />
        <Tulip variant="xs" flip className="content-tulips__ml" />
        <Tulip variant="xs" className="content-tulips__mr" />
        <Tulip variant="xs" className="content-tulips__bl" />
        <Tulip variant="xs" flip className="content-tulips__br" />
      </div>
      <Opening />
      <AboutHer />
      <PhotoGalleryAyu />
      <OurStory />
      <PhotoGalleryTogether />
      <ThankYou />
      <FinalMemoryGallery />
      <Closing onReopen={onReopen} />
    </div>
  )
}

export default ContentView
