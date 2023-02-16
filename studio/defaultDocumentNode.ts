import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'
import { EyeOpenIcon, EditIcon } from '@sanity/icons'

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  return doc?.slug?.current
    ? `http://localhost:3000/${doc.slug.current}`
    : `${window.location.host}`
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `page` schema type documents
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form().icon(EditIcon),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc) + '?preview=true',
          })
          .title('Preview')
          .icon(EyeOpenIcon)
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
