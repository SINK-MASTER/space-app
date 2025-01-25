import { NavLink } from 'react-router'

export type NavLinkItemProps = {
  link: string
  icon: React.ReactNode
  label?: string
}
const NavLinkItem: React.FC<NavLinkItemProps> = (props) => {
  const { icon, link, label } = props
  return (
    <NavLink to={link}>
      <div className="flex flex-col items-center gap-2 text-neutral-400 font-normal text-[11px]">
        {icon}
        <span>{label}</span>
      </div>
    </NavLink>
  )
}

export default NavLinkItem
