import {FC} from 'react'
import {Link} from 'react-router-dom'

interface MenuBarItemProps {
    name: string
    path: string
}

const content = [
    {name: 'Home', path: '/'},
    {name: 'Products', path: '/products'},
]

export const Navigation: FC = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between bg-white w-full">
            <Link className="justify-center self-center" to="/">
              <img alt="Samsung logo" className="mt-4 sm:mt-0 sm:ml-4 h-8 w-32" src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png"/>
            </Link>
            <div className="flex-end flex m-4 justify-between sm:justify-end overflow-hidden items-center text-black">
                {content.map((element, i) => (
                    <NavigationItem key={i} {...element} />
                ))}
            </div>
        </div>
    )
}

export const NavigationItem: FC<MenuBarItemProps> = ({name, path}) => (
    <Link to={path}>
        <p className="flex cursor-pointer flex-col px-4 py-2 text-xl transition-all hover:scale-105">
            {name}
        </p>
    </Link>
)
