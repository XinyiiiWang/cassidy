import Image from 'next/image';
import logoImg from '@/assets/img/2wei.png';
import aboutImg from '@/assets/img/about.png';
import gameImg from '@/assets/img/game.png';
import publicImg from '@/assets/img/public.png';
import exhibitionImg from '@/assets/img/exhibition.png';
import publicationImg from '@/assets/img/publication.png';
import illustrationImg from '@/assets/img/illustration.png';
import otherImg from '@/assets/img/other.png';
import Link from 'next/link';


export default function Sidebar(){
  console.log("logoImg",logoImg);
    return (
        <div className="fixed top-0 left-4 md:left-8 lg:left-20 h-screen w-64 text-black p-6 flex flex-col justify-between">
            <div>
                <div className="mb-10">
                <Link href="/">
                <Image
                  src={logoImg}
                  alt="Logo"
                  width={150}
                  height={50}
                  />
                </Link>
                </div>
                <div className="mb-6">
                <Link href="/about">
                  <Image
                    src={aboutImg}
                    alt="about"
                    width={75}
                    height={25}
                  />
                </Link>
                </div>
            </div>
            <div>
                <ul>
                    <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
                        <a href="#" className="block px-4 py-2 hover:text-gray-800 flex items-center">
                          <Image
                            src={gameImg}
                            alt="game"
                            width={gameImg.width/3}
                            height={gameImg.height/3}
                          />
                        </a>
                    </li>
                    <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
                        <a href="#" className="block px-4 py-2 hover:text-gray-800 flex items-center">
                          <Image
                            src={publicImg}
                            alt="public"
                            width={publicImg.width/3}
                            height={publicImg.height/3}
                          />
                        </a>
                    </li>
                    <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
                        <a href="#" className="block px-4 py-2 hover:text-gray-800 flex items-center">
                          <Image
                            src={exhibitionImg}
                            alt="exhibition"
                            width={exhibitionImg.width/3}
                            height={exhibitionImg.height/3}
                          />
                        </a>
                    </li>
                    <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
                        <a href="#" className="block px-4 py-2 hover:text-gray-800 flex items-center">
                          <Image
                            src={publicationImg}
                            alt="publication"
                            width={publicationImg.width/3}
                            height={publicationImg.height/3}
                          />
                        </a>
                    </li>
                    <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
                        <a href="#" className="block px-4 py-2 hover:text-gray-800 flex items-center">
                          <Image
                            src={illustrationImg}
                            alt="illustration"
                            width={illustrationImg.width/3}
                            height={illustrationImg.height/3}
                          />
                        </a>
                    </li>
                    <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
                        <a href="#" className="block px-4 py-2 hover:text-gray-800 flex items-center">
                          <Image
                            src={otherImg}
                            alt="other"
                            width={otherImg.width/3}
                            height={otherImg.height/3}
                          />
                        </a>
                    </li>
                </ul>
          </div>  
          
        </div>
      );
}