import { useSession } from "next-auth/react";
import { ReactElement } from "react";

import {
    CalendarIcon,
    ClockIcon,
    ComputerDesktopIcon,
    UsersIcon,
} from "@heroicons/react/20/solid";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

function Sidebar(): ReactElement {
    const { data } = useSession();

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow
                src={data?.user?.image}
                title={data?.user?.name ?? ""}
            />

            <SidebarRow Icon={UsersIcon} title='Friends' />
            <SidebarRow Icon={UserGroupIcon} title='Groups' />
            <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
            <SidebarRow Icon={ComputerDesktopIcon} title='Watch' />
            <SidebarRow Icon={CalendarIcon} title='Events' />
            <SidebarRow Icon={ClockIcon} title='Memories' />
            <SidebarRow Icon={ChevronDownIcon} title='See More' />
        </div>
    );
}

export default Sidebar;
