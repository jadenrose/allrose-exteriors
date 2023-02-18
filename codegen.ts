import { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const config: CodegenConfig = {
  schema: process.env.SCHEMA,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: ['typescript'],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        dedupeFragments: true,
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
