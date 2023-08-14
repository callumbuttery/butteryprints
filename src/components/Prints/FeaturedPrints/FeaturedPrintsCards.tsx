import kingfisher from '../../../assets/callum_buttery_kingfisher.jpg'
import roedeer from '../../../assets/callum_buttery_roe_deer.jpg'
import fox from '../../../assets/callum_buttery_fox.jpg'

export const FeaturedPrintsCards: React.FC = () => {

    const prints = [
        {name: 'Kingfisher 2023', src: kingfisher},
        {name: 'Fox 2023', src: fox},
        {name: 'Roe Deer 2023', src: roedeer},
    ]

    return (
        <div>
            <div className="flex justify-center mt-24 columns-2">
                <div>test 1</div>
                <div>test 2</div>
            </div>
        </div>
    )
}