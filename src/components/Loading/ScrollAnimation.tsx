import { mdiArrowDownCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';

export const ScrollAnimator: React.FC = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" className="flex justify-center pt-16 pb-10">
            <Icon className="animate-pulse w-10 h-10" color='#fff' path={mdiArrowDownCircleOutline} />
        </div>
    )
}