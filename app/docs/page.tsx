// ./app/docs/page.tsx
import { redirect } from 'next/navigation'

export default function DocsRootPage() {
  redirect('/docs/getting-started/introduction')
}
