import {AnimatedWords} from '@/components/AnimatedWords/AnimatedWords.tsx';

export default function Home() {
  // add some component library for some quick nice parts, also add some translations with i18next?

  return (
    <div className="flex flex-col content-center bg-white h-full w-full overflow-y-scroll">
      <div className="w-full h-fit bg-black">
        <div className="md:p-12 py-12 px-2 text-6xl">
          <p
            className="flex w-full text-4xl px-6 py-24 text-white self-center justify-center">Check out our newest
            technology and products</p>
        </div>
      </div>
      <div className=" flex justify-center styled-background w-full h-full">
      <div
        className="text-black self-start max-w-6xl w-full my-24 text-2xl">
        <AnimatedWords words={['Create', 'Design', 'Innovate']}/>
      </div>
      </div>
    </div>
  )
}
