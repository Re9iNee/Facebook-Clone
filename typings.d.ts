export type HeroIcon = (
    props: ComponentProps<"svg"> & {
        title?: string;
        titleId?: string;
    }
) => JSX.Element;
