import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Plugins
import { documentI18n } from '@sanity/document-internationalization'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash"
import { media } from 'sanity-plugin-media'

export default defineConfig({
  basePath: import.meta.env.SANITY_STUDIO_BASE_PATH,
  name: import.meta.env.SANITY_STUDIO_PROJECT_NAME,
  title: import.meta.env.SANITY_STUDIO_PROJECT_TITLE,
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  plugins: [
    deskTool(),
    documentI18n({
      // .. your i18n config, example:
      // languages: ['en', 'fr'],
    }),
    media(),
    unsplashImageAsset(),
    ...(isDev ? [visionTool()] : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
