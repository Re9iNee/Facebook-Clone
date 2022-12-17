import { ComponentProps, ReactElement } from "react";

type Props = {
    Icon: (
        props: ComponentProps<"svg"> & {
            title?: string;
            titleId?: string;
        }
    ) => JSX.Element;
    active?: boolean;
};
function HeaderIcon({ Icon, active }: Props): ReactElement {
    return (
        <div className='flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group'>
            <Icon
                className={`text-gray-500 h-5 sm:h-7 mx-auto text-center group-hover:text-blue-500 ${
                    active ? "text-blue-500" : ""
                }`}
            />
        </div>
    );
}

export default HeaderIcon;
