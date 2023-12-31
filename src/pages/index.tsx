import Head from "next/head";

const QrCode = () => {
  return <div className="flex">
    <img src="/images/image-qr-code.png" alt="qr-code" className="rounded-[16px]" />
  </div>
}

const QrCodeWithText = () => {
  return <div className="max-w-sm grid gap-4 bg-white rounded-[20px] p-6 ">
    <QrCode />
    <div className="text-center text-2xl font-bold">
      Improve your front-end skills by building projects
    </div>
    <div className="text-center font-normal subtitle">
      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
    </div>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" target="_blank">Frontend
        Mentor</a>.
      Coded by <a target="_blank" href="https://github.com/lolo8304/frontendmentor-coding">Lolo8304</a>.
    </div>
  </div>


}

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | QR code component</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/images/favicon-32x32.ico" />
      </Head>
      <main className="flex min-h-screen">
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <QrCodeWithText></QrCodeWithText>
        </div>
      </main >
    </>
  );
}
