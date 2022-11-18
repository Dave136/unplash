import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Unplash</title>
        <meta name="description" content="Unplash clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="text-3xl font-bold underline">
          Welcome to unplash app!
        </h1>
      </main>
    </div>
  );
}
