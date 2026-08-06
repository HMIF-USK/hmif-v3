'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
const AppHeader: React.FC = () => {
  const [isFocus, setIsfocus] = useState<boolean>(false);
  const [isActiveSection, setIsActiveSection] = useState<number>(1);
  const [height, setHeight] = useState<boolean>(false);
  const [width, setWidth] = useState<boolean>(false);
  const [listNav, setListNav] = useState<boolean>(false);
  const [listHover, setListHover] = useState<number>(0);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 639px)');
  const pathname = usePathname();
  const [windowObject, setWindowObject] = useState<string>('');

  const sizeHandler = () => {
    setTimeout(() => {
      setHeight(!height);
    }, 0);
    setTimeout(() => {
      setWidth(!width);
    }, 350);
  };

  const listViewHandler = () => {
    if (!listNav) {
      setTimeout(() => {
        setListNav(!listNav);
      }, 490);
    } else {
      setListNav(!listNav);
    }
  };

  const handleClick = () => {
    const mobilButton = document.getElementById('mobile-button') as HTMLButtonElement;
    mobilButton.disabled = true;
    setTimeout(() => {
      mobilButton.disabled = false;
    }, 500);
    sizeHandler();
    setIsfocus((state) => !state);
    listViewHandler();
  };

  const handleScroll = () => {
    // console.log(isFocus);
    if (!isFocus) {
      const currentScrollPos: number = typeof window !== 'undefined' ? window.scrollY : 0;
      if (Math.abs(currentScrollPos - prevScrollPos) > 100 && !isFocus) {
        if (currentScrollPos > prevScrollPos) {
          setIsScrollDown(true);
          // console.log("Down");
        } else {
          setIsScrollDown(false);
          // console.log("Up");
        }
        setPrevScrollPos(currentScrollPos);
      }
    }
  };

  useEffect(() => {
    // setWindowObject(window.location.pathname);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos, isFocus, isActiveSection]);

  return (
    <div className=" w-screen relative z-[100]">
      {/* Mobile AppHeader*/}
      <div className="lg:hidden w-full flex justify-center items-center px-7 box-border">
        <div
          className={`flex flex-col box-border justify-between items-start rounded-xl h-[10%] min-h-10 max-h-16 fixed z-[151] duration-[0.3s] ${!isScrollDown ? 'bottom-[3%]' : 'bottom-[-10%]'
            } ${width ? 'min-w-[88%] max-w-[88%] sm:min-w-[65%] sm:max-w-[65%]' : 'min-w-32 max-w-40'
            } ${height ? 'min-h-[80%] max-h-[80%]' : 'min-h-10 max-h-16'
            } bg-surface-muted/50 py-4 border-brand/60 border-[1.8px] backdrop-blur-[5px]`}
        >
          <div className=" box-border px-7 h-[90%]">
            <ol className={`relative box-border ${listNav ? '' : 'hidden'}`}>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-white"></div>
                <Link href={'/home'} onClick={() => handleClick()}>
                  <time className="mb-1 text-sm font-bold leading-none text-white ">Home</time>
                </Link>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white"></div>
                <Link href={'/event'} onClick={() => handleClick()}>
                  <time className="mb-1 text-sm font-bold leading-none text-white ">Event</time>
                </Link>
              </li>
              {/* <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white"></div>
                <Link href={'/merch'} onClick={() => handleClick()}>
                  <time className="mb-1 text-sm font-bold leading-none text-white ">Merch</time>
                </Link>
              </li> */}
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white"></div>
                <Link href={'/achievement'} onClick={() => handleClick()}>
                  <time className="mb-1 text-sm font-bold leading-none text-white ">
                    Achievement
                  </time>
                </Link>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white"></div>
                <Link href={'/informatic-club'} onClick={() => handleClick()}>
                  <time className="mb-1 text-sm font-bold leading-none text-white ">
                    Informatic Club
                  </time>
                </Link>
              </li>
            </ol>
          </div>

          <div className="w-full">
            <ul className="w-full flex justify-between px-6 items-center text-white">
              <li>
                <div className=" h-7 w-7">
                  <Image
                    src={'/images/HMIF-No-BG.png'}
                    height={28}
                    width={28}
                    alt="HMIF"
                    className=" object-fill"
                  />
                </div>
              </li>
              <li>
                <div className=" h-7 w-7">
                  <button
                    id="mobile-button"
                    className=" h-full w-full transition-all duration-[0.5s]"
                    onClick={() => handleClick()}
                  >
                    {isFocus ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" object-fill"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`hidden lg:flex justify-center items-center fixed ${!isScrollDown ? 'top-[3%]' : 'top-[-10%]'
          } z-[151] w-screen h-16 font-poppins font-semibold duration-500`}
      >
        <ul className="flex justify-evenly items-center  w-[88%] max-w-[1100px] lg:max-w-[950px] 2xl:w-[45%] bg-surface-muted/65 backdrop-blur-[5px] rounded-[12px] text-white font-semibold text-[12px] tracking-wide px-4 py-3 lg:text-sm">
          <li>
            <Link
              href={'/home'}
              onClick={() => setIsActiveSection(1)}
              onMouseOver={() => setListHover(1)}
              onMouseOut={() => setListHover(0)}
              className="bg-surface-muted flex justify-center items-center sm:min-w-[90px] md:min-w-[140px] 2xl:min-w-[100px] 2xl:max-w-[150px] w-[4vw] h-[45px] text-center rounded-[10px] leading-[45px] relative"
            >
              {pathname === '/home' ? (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-surface-muted`}
                >
                  Home
                </h1>
              ) : (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${listHover === 1 ? 'text-surface-muted' : 'text-white'
                    }`}
                >
                  Home
                </h1>
              )}

              {pathname === '/home' ? (
                <div className={`w-full h-full rounded-[10px] bg-white absolute `}></div>
              ) : (
                <div
                  className={` ${listHover === 1 ? 'w-full h-full duration-[0.3s]' : 'w-0 h-0 duration-[0.2s]'
                    } rounded-[10px] bg-white absolute`}
                ></div>
              )}
            </Link>
          </li>
          <li>
            <Link
              href={'/event'}
              onClick={() => setIsActiveSection(2)}
              onMouseOver={() => setListHover(2)}
              onMouseOut={() => setListHover(0)}
              className="bg-surface-muted flex justify-center items-center sm:min-w-[90px] md:min-w-[140px] 2xl:min-w-[100px] 2xl:max-w-[150px] w-[4vw] h-[45px] text-center rounded-[10px] leading-[45px] relative"
            >
              {pathname.includes('event') ? (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-surface-muted`}
                >
                  Event
                </h1>
              ) : (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${listHover === 2 ? 'text-surface-muted' : 'text-white'
                    }`}
                >
                  Event
                </h1>
              )}

              {pathname.includes('event') ? (
                <div className={`w-full h-full rounded-[10px] bg-white absolute `}></div>
              ) : (
                <div
                  className={` ${listHover === 2 ? 'w-full h-full duration-[0.3s]' : 'w-0 h-0 duration-[0.2s]'
                    } rounded-[10px] bg-white absolute`}
                ></div>
              )}
            </Link>
          </li>
          {/* <li>
            <Link
              href={'/merch'}
              onClick={() => setIsActiveSection(3)}
              onMouseOver={() => setListHover(3)}
              onMouseOut={() => setListHover(0)}
              className="bg-surface-muted flex justify-center items-center sm:min-w-[90px] md:min-w-[140px] 2xl:min-w-[100px] 2xl:max-w-[150px] w-[4vw] h-[45px] text-center rounded-[10px] leading-[45px] relative"
            >
              {pathname.includes('merch') ? (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-surface-muted`}
                >
                  Merch
                </h1>
              ) : (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                    listHover === 3 ? 'text-surface-muted' : 'text-white'
                  }`}
                >
                  Merch
                </h1>
              )}

              {pathname.includes('merch') ? (
                <div className={`w-full h-full rounded-[10px] bg-white absolute`}></div>
              ) : (
                <div
                  className={` ${
                    listHover === 3 ? 'w-full h-full duration-[0.3s]' : 'w-0 h-0 duration-[0.2s]'
                  } rounded-[10px] bg-white absolute`}
                ></div>
              )}
            </Link>
          </li> */}
          {/* <li>
            <Link
              href={"/article"}
              onClick={() => setIsActiveSection(4)}
              onMouseOver={() => setListHover(4)}
              onMouseOut={() => setListHover(0)}
              className="bg-background flex justify-center items-center sm:min-w-[90px] md:min-w-[140px] 2xl:min-w-[100px] 2xl:max-w-[150px] w-[4vw] h-[45px] text-center rounded-[10px] leading-[45px] relative"
            >
              {windowObject.location.pathname.includes("article") ? (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-background`}
                >
                  Article
                </h1>
              ) : (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                    listHover === 4 ? "text-background" : "text-white"
                  }`}
                >
                  Article
                </h1>
              )}

              {windowObject.location.pathname.includes("article") ? (
                <div
                  className={`w-full h-full rounded-[10px] bg-white absolute`}
                ></div>
              ) : (
                <div
                  className={` ${
                    listHover === 4
                      ? "w-full h-full duration-[0.3s]"
                      : "w-0 h-0 duration-[0.2s]"
                  } rounded-[10px] bg-white absolute`}
                ></div>
              )}
            </Link>
          </li> */}
          <li>
            <Link
              href={'/achievement'}
              onClick={() => setIsActiveSection(5)}
              onMouseOver={() => setListHover(5)}
              onMouseOut={() => setListHover(0)}
              className="bg-surface-muted flex justify-center items-center min-w-[120px] md:min-w-[140px] h-[45px] text-center rounded-[10px] leading-[45px] relative"
            >
              {pathname.includes('achievement') ? (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-surface-muted`}
                >
                  Achievement
                </h1>
              ) : (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${listHover === 5 ? 'text-surface-muted' : 'text-white'
                    }`}
                >
                  Achievement
                </h1>
              )}

              {pathname.includes('achievement') ? (
                <div className={`w-full h-full rounded-[10px] bg-white absolute`}></div>
              ) : (
                <div
                  className={` ${listHover === 5 ? 'w-full h-full duration-[0.3s]' : 'w-0 h-0 duration-[0.2s]'
                    } rounded-[10px] bg-white absolute`}
                ></div>
              )}
            </Link>
          </li>
          <li>
            <Link
              href={'/informatic-club'}
              onClick={() => setIsActiveSection(6)}
              onMouseOver={() => setListHover(6)}
              onMouseOut={() => setListHover(0)}
              className="bg-surface-muted flex justify-center items-center min-w-[130px] md:min-w-[150px] h-[45px] text-center rounded-[10px] leading-[45px] relative"
            >
              {pathname.includes('informatic-club') ? (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-surface-muted whitespace-nowrap`}
                >
                  Informatic Club
                </h1>
              ) : (
                <h1
                  className={`text-[100%] absolute z-[160] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${listHover === 6 ? 'text-surface-muted' : 'text-white'
                    } whitespace-nowrap`}
                >
                  Informatic Club
                </h1>
              )}

              {pathname.includes('informatic-club') ? (
                <div className={`w-full h-full rounded-[10px] bg-white absolute`}></div>
              ) : (
                <div
                  className={` ${listHover === 6 ? 'w-full h-full duration-[0.3s]' : 'w-0 h-0 duration-[0.2s]'
                    } rounded-[10px] bg-white absolute`}
                ></div>
              )}
            </Link>
          </li>
          <ThemeToggle />
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
