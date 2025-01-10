import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
    sidebar={{
      hideSearch:true,
    }} tree={source.pageTree} >
      {children}
    </DocsLayout>
  );
}
