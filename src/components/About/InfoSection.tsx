import { StoryCard } from "./StoryCard"

export const InfoSection: React.FC = () => {
    return (
        <div className="mt-16">
            <div className="font-montserrat flex justify-center text-2xl mb-5">BIOGRAPHY</div>
            <hr className="flex justify-center w-72 mx-auto"/>
            <StoryCard />
        </div>
    )
}