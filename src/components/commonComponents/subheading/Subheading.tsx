import { Link } from "react-router-dom";
import { resolveOptimizedAsset } from '../../../utils/resolveOptimizedAsset';

const logo = resolveOptimizedAsset('logo.jpeg');

const Subheading = () => {
    return (
        <section>
            <div className="w-full h-fit flex justify-start mt-12 px-4 bg-transparent">
                <Link to={'/'}>
                    <img className="w-40 h-20 object-contain bg-transparent" src={logo} alt="LOGO" />
                </Link>
            </div>
        </section>
    );
};

export default Subheading;
