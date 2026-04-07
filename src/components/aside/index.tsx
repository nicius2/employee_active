import {
  HelpCircle,
  HomeIcon,
  Settings,
  ShieldUser,
  User,
  UserRoundSearch,
} from "lucide-react";
import {
  AsideAllComponents,
  AsideComponents,
  AsideDiv,
  AsideTitle,
  AsideTitleComponents,
} from "./style";

export function Aside() {
  return (
    <>
      <AsideDiv>
        <AsideTitleComponents>
          <AsideTitle>
            <h1>The Atrium</h1>
            <h3>employee directory</h3>
          </AsideTitle>

          <AsideAllComponents>
            <AsideComponents to="/">
              <HomeIcon />
              <p>Home</p>
            </AsideComponents>
            <AsideComponents to="/directory">
              <ShieldUser />
              <p>Directory</p>
            </AsideComponents>
            <AsideComponents to="/ref">
              <UserRoundSearch />
              <p>Teams</p>
            </AsideComponents>
            <AsideComponents to="/ref">
              <User />
              <p>Me</p>
            </AsideComponents>
          </AsideAllComponents>
        </AsideTitleComponents>

        <div>
          <AsideComponents to="/settings">
            <Settings />
            <p>Settings</p>
          </AsideComponents>

          <AsideComponents to="/help">
            <HelpCircle />
            <p>Help</p>
          </AsideComponents>
        </div>
      </AsideDiv>
    </>
  );
}
