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

function ContentView({ onReachClosing }) {
  return (
    <div className="view view--content">
      <Opening />
      <AboutHer />
      <PhotoGalleryAyu />
      <OurStory />
      <PhotoGalleryTogether />
      <ThankYou />
      <FinalMemoryGallery />
      <Closing onReachClosing={onReachClosing} />
    </div>
  )
}

export default ContentView
