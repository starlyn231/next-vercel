

import Link from 'next/link';
import { MainLayout } from '../../../components/layout/MainLayout';


export default function Pricing() {
  return (
    <MainLayout>
      <h1 className="title">
        <h1>Pricing Page</h1>

        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  )
}
