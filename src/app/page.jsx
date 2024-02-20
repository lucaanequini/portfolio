import ContactSection from '@/components/ContactSection';
import CardAb from '../components/CardAb';
import CardArea from '../components/CardArea';
import CertificatesSlide from '../components/CertificatesSlide';
import Footer from '../components/Footer';
import Image from 'next/image';
import HelloContent from '@/components/HelloContent';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center md:px-5 xl:px-36'>
        <div id='inicio' className='flex flex-col gap-5 md:items-center lg:flex-row lg:mt-20 lg:w-screen xl:px-32'>
          <HelloContent></HelloContent>
          <Image src={'/real.png'} width={450} height={450} quality={100} alt='profilePic' priority className='rounded-full'></Image>
        </div>
        <div id='about-me'></div>
        <div className="flex flex-col w-screen items-center justify-between gap-20 mt-40">
          <CardAb></CardAb>
          <div className='flex flex-col gap-5 text-center'>
            <Image src={'/gif2.gif'} width={350} height={350} quality={100} alt='gif' priority className='drop-shadow-2xl'></Image>
          </div>
        </div>
        <div id='projects'></div>
        <div className='flex flex-col items-center justify-center mt-40'>
          <CardArea></CardArea>
        </div>
        <div className='mt-40'>
          <CertificatesSlide></CertificatesSlide>
        </div>
        <div id="contact" className='mt-40 mb-10'>
          <ContactSection></ContactSection>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
