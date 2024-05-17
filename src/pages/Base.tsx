import { ModeToggle } from "@/components/mode-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavLink, Outlet } from "react-router-dom"

const Base = () => {
  return (
    <div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Feed
                </NavigationMenuLink>
              </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavLink to="/chart" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Chart
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
       
      </div>
      <div><Outlet /></div>
    </div>
  )
}

export default Base;