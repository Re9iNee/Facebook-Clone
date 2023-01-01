import { FieldValue, Timestamp } from "firebase/firestore";

export type HeroIcon = (
    props: ComponentProps<"svg"> & {
        title?: string;
        titleId?: string;
    }
) => JSX.Element;

export interface Post {
    id: string;
    name: string;
    email: string;
    message: string;
    mainImage?: string;
    authorImage: string;
    timestamp: Timestamp;
}
