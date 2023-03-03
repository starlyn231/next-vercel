

import Head from 'next/head';
import Link from 'next/link';
import { MainLayout } from '../../components/layout/MainLayout';

import { Navbar } from '../../components/Navbar';

export default function Home() {
  return (
    <MainLayout>

      <h1 className="title">
        HOME
      </h1>
      <div >
        <p>
          Get started by editing&nbsp;

        </p>
      </div>

    </MainLayout>
  )
}
