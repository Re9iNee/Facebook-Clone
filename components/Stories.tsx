import { ReactElement } from "react";
import StoryCard from "./StoryCard";

const storyLists = [
    {
        id: 1,
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        id: 2,
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/snf",
    },
    {
        id: 3,
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];
const Stories = (): ReactElement => {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {storyLists.map((story) => (
                <StoryCard
                    key={story.id}
                    src={story.src}
                    name={story.name}
                    profile={story.profile}
                />
            ))}
        </div>
    );
};

export default Stories;
