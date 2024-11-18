//import { Portrait } from 'components/sections/portrait'
import { PortraitAnimation, GameGlobe, NFTsection} from 'components/sections'
import Sound from 'components/sound/sound'

export default function Home() {
  return (
    <main className="h-full w-full 
    dark:bg-secundary bg-secundary">
      <Sound />
      <PortraitAnimation/>
    </main>
  )
}
